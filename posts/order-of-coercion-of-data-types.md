##### Generally order of Coercion for data types is

##### character > complex > numeric > integer > logical

```
> integer_Logical<-c(1L, FALSE)
> integer_Logical
[1] 1 0
> class(integer_Logical)
[1] "integer"
> 
> Numberic_integer_Logical<-c(2 ,1L, FALSE)
> Numberic_integer_Logical
[1] 2 1 0
> class(Numberic_integer_Logical)
[1] "numeric"
> 
> complext_Numberic_integer_Logical<-c(3+4i ,2 ,1L, FALSE)
> complext_Numberic_integer_Logical
[1] 3+4i 2+0i 1+0i 0+0i
> class(complext_Numberic_integer_Logical)
[1] "complex"
> 
> string_complext_Numberic_integer_Logical<-c("HelloWorld",3+4i ,2 ,1L, FALSE)
> string_complext_Numberic_integer_Logical
[1] "HelloWorld" "3+4i"       "2"          "1"          "FALSE"     
> class(string_complext_Numberic_integer_Logical)
[1] "character"
```