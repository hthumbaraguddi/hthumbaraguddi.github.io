```
lenToCompare = len(string)-len(sub_string)
print(sum([1 for i in range(lenToCompare+1) if string[i:i+len(sub_string)]== sub_string])
```

string = “LMNONON”  
sub\_string =”NON”  
2  
[/sourcecode ]