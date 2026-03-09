I am going through [Head First OOAD Book](http://www.amazon.com/Head-First-Object-Oriented-Analysis-Design/dp/0596008678). Its really nice book to learn about OO concepts.  Very nicely explained the concept through Java code.  Here is a code for Chapter 5 Part 2 in C#.

[![](../images/zip.png "Zip")](https://harshaprojects.wordpress.com/wp-content/uploads/2010/09/zip.png)

File On Sky Drive

[MusicStore.zip On Sky Drive](http://cid-ad6bea64670f483c.office.live.com/embedicon.aspx/.Public/MusicStore.zip)

Interesting part of this exercise was converting enum to string. In java, it is very easy, but in C# we don’t have that feature. But same achieved through “System.Attribute”.  I read this concept from following link:

<http://weblogs.asp.net/stefansedich/archive/2008/03/12/enum-with-string-values-in-c.aspx>

Anyways, Here is the code:

First you declare your enum with attributes:

```

    enum InstrumentType
    {
        [StringAttribute("Guitar")]
        GUITAR,
        [StringAttribute("Banjo")]
        BANJO,
        [StringAttribute("Dodro")]
        DODRO,
        [StringAttribute("Fiddle")]
        FIDDLE,
        [StringAttribute("Bass")]
        BASS,
        [StringAttribute("Mandolin")]
        MANDOLIN
    }

```

To manage your attribute, new class called StringAttribute is created:

```


    public class StringAttribute : System.Attribute
    {
        private string stringValue;

        public StringAttribute(string value)
        {
            this.stringValue = value;
        }
        public string StringValue
        {
            get { return stringValue; }
        }

    }
```

Attributes are retrieved through extension method:

```


static class ExtensionMethods
    {
        public static string TryGetStringValue(this Enum EnumValue)
        {
            System.Type type = EnumValue.GetType();

            FieldInfo fieldInfo = type.GetField(EnumValue.ToString());

            StringAttribute[] attribs = fieldInfo.GetCustomAttributes(
                typeof(StringAttribute), false) as StringAttribute[];
            return attribs.Length>0 ? attribs[0].StringValue : null;
        }
    }
```

In the Code, it is accessed like this:

```

string s = ((InstrumentType)(spec.GetProperty("instrumentType"))).TryGetStringValue();
```

Hope you will find it useful.

Thanks for visiting the blog.