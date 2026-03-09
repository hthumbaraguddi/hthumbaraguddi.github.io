```
> Grades<-c("Trainee","SystemEngineer","Analyst","JuniorConsultant")
> GradesFactor <-factor(Grades) ##By default Grades alphabetical order. 
> GradesFactor
[1] Trainee          SystemEngineer   Analyst          JuniorConsultant
Levels: Analyst JuniorConsultant SystemEngineer Trainee

> GradesFactor <-factor(Grades,levels = Grades) #Now defining the order 
> GradesFactor
[1] Trainee          SystemEngineer   Analyst          JuniorConsultant
Levels: Trainee SystemEngineer Analyst JuniorConsultant

#if you wan to add new level to a fractor, need to change to vector and append. 
> Grades_1<- as.vector(GradesFactor)
> Grades_2<-append(Grades_1,c("SeniorConsultant","Consultant"))
> Grades_2
[1] "Trainee"          "SystemEngineer"   "Analyst"          "JuniorConsultant" "SeniorConsultant" "Consultant"      

> GradesFractor2<- as.factor(Grades_2)
> GradesFractor2   ##When you convert it back, Levels are lost. 
[1] Trainee          SystemEngineer   Analyst          JuniorConsultant SeniorConsultant Consultant      
Levels: Analyst Consultant JuniorConsultant SeniorConsultant SystemEngineer Trainee

> GradesFractor2 <-factor(GradesFractor2,levels =c(Grades,c("SeniorConsultant","Consultant"))) #Now defining the order 

> GradesFractor2
[1] Trainee          SystemEngineer   Analyst          JuniorConsultant SeniorConsultant Consultant      
Levels: Trainee SystemEngineer Analyst JuniorConsultant SeniorConsultant Consultant
```