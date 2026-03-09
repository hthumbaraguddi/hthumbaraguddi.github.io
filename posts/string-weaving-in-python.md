I am trying functionalities and trying to record here. Here I am trying to weave two strings.

Important takeaway are chain.form\_iterable from intertool and converting list to string, i.e., join method on empty string.

```
import itertools
def stringWeave(argStr):
	evenStr = argStr[1::2]
	oldStr = argStr[0::2]
	oldStr=oldStr.upper()
	print(evenStr)
	l=list(itertools.chain.from_iterable(zip(oldStr,evenStr)))
	print("".join(l))
stringWeave("what are you upto ")
>>>WhAt aRe yOu uPtO
```

Thats all folks, Thanks for visiting