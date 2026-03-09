Hope you are using INotifyPropertyChanged and also implemented same. When we are raising the event, we also need to supply the property name, usually we hard-code it. So this article about getting the property name from within the property block(setter block).

Here is the code and comments:

```

    private string _BindedStringProp;

        public string BindedStringProp
        {
            get 
            { 
                return _BindedStringProp; 
            }
            set 
            { 
                _BindedStringProp = value;
                //Following line, RawpropName will have value "set_BindedStringProp"
                string RawpropName = MethodBase.GetCurrentMethod().Name;
                //but we need correct property name which will get when we remove first 4 characters.
                string RequiredPropName = MethodBase.GetCurrentMethod().Name.Substring(4); 
                //Following is best way to get the Property Method.
                RaisePropertyChanged();
            }
        }

        private void RaisePropertyChanged([CallerMemberName] string propertyName = "")
        {
            //[CallerMemberName] is doing all the magic.
            if (PropertyChanged != null && !string.IsNullOrEmpty(propertyName))
            {
                PropertyChanged(this, new PropertyChangedEventArgs(propertyName));
            }

            //But when you check the same in a method, we will get correct method name and 
            //no substring is required.
            string propName = MethodBase.GetCurrentMethod().Name;
            
        }
```

Please leave your comments.

Thank you.