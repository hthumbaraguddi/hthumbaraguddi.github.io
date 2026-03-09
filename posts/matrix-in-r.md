Here is a very simple example of Matrix creation in R

```
age<- c(22,35,53)
names(age)<-c("hari","giri","ravi")
salary<-c(55000,65000,75000)
names(salary)<-c("hari","giri","ravi")

salary_matrix<-cbind(age,salary)
salary_matrix
output:
> salary_matrix
     age salary
hari  22  55000
giri  35  65000
ravi  53  75000

salary_matrix<-rbind(age,salary)
salary_matrix

output:
> salary_matrix
        hari  giri  ravi
age       22    35    53
salary 55000 65000 75000
```