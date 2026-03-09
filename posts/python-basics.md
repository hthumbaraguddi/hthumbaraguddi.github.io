### Experiments with Dictionary: Here is a Dict showing gross income of a movie world wide.

```
#Dict with values in integer
MovieRevenue_stats= {'US': '100','Europe':'50','Asia':'290','Australia':'21','Amazon':'5','NetFlix':'6'}
# Converting with Value to int
NewMovieRevenue_stats =dict((k,int(v)) for k,v in MovieRevenue_stats.items())
NewMovieRevenue_stats
```

```
output:
{
   'US': 100,
   'Europe': 50,
   'Asia': 290,
   'Australia': 21,
   'Amazon': 5,
   'NetFlix': 6
}
```

Lets do some filter, get all regions where movie revenue is more than $20M

```
#Dict with values in integer
MovieRevenue_stats= {'US': '100','Europe':'50','Asia':'290','Australia':'21','Amazon':'5','NetFlix':'6'}
# Converting with Value to int
# Also when doing comparison need convert string v to int v.
NewMovieRevenue_stats =dict((k,int(v)) for k,v in MovieRevenue_stats.items() if int(v) >20)
NewMovieRevenue_stats
```

Output:

```
{'US': 100, 'Europe': 50, 'Asia': 290, 'Australia': 21}
```