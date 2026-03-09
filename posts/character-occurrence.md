How do you count all the occurances in a string?

Lets a string is “aabbccdda”, answer should be a ->3, b->2, c->2, d->2. There may be many ways to count the same.  
One method would be Switch-Case statements.Don’t laugh it is still a good method. Another is compare the character with other and when it found increase the count. But here you check too many times. One will atleast iterate n\*(n+1)/2 times, Where n is the number of characters in a string.

Here is a code snippet for counting occurances of all the Character in a string. Thanks to vidya.

```

static public Dictionary<char,int> Parse(string sequence)
{
    Dictionary<char,int> SequenceCount = new Dictionary<char,int>();
    for (int i = 0; i < sequence.Length; i++)
    {
        int Count = 0;
        bool isAvailable = SequenceCount.TryGetValue(sequence[i], out Count);
        
        //On Available You remove that character and Add Again with Count +1.
        if (isAvailable)
            SequenceCount.Remove(sequence[i]);
        //On Not Available, you have to add the character to Dictionary and increase
        //the count. Remember 'Count' still 0.
        SequenceCount.Add(sequence[i], Count + 1);
        
    }

    return SequenceCount;

}

```

Here is how you call the same in Main():

```

static public void Main()
{
    string s = "aabbccddeeffabcdefa23";
    Dictionary<char,int> SequnceCount=Parse(s);
    foreach (KeyValuePair<char, int> key in SequnceCount)
    {
        Console.WriteLine("{0}  {1}", key.Key,key.Value);
    }
    Console.Read();
}

```

Please free to comment on the same. Let me know, if you found any such problems and answers.  
Thanks for your time.