As we all know, application start up is crucial and minimizing lunching time  is a challenging and interesting. Usually, startup is  processed behind splash screen and update the status through messages. But as many know, machine code is not ready and it will be available just before it is executed. So machine code is generated through JIT Compilation but it is the same line of code executed every time on same machine and spending same amount of time. The JIT Code generated its all lost when you close the application.  Before we jump to .net feature, brief intro to JIT Compilation.

What is JIT Compilation?  
As you all know, on .net, Code is compiled into IL code and it is not Machine code. In order to execute the a piece of code, that should be available in machine code. JIT made it available during run time i.e, converts IL Code to Machine code during run time. That means, you have to wait for your code to execute. Waiting time may be very very small, but still one need to wait.

Whats the Solution?  
Multi-core Jitting in .net 4.5

```
string path = Directory.GetParent(Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData)).FullName;
ProfileOptimization.SetProfileRoot(path); // C:/Users/user/AppData
ProfileOptimization.StartProfile("Startup.Profile"); // this file is created.
```

When application is launched for first JIT produces Machine code and startup.profile file written when application exists. On consecutive application launches uses this profile file and avoids JITTing.

For more info please refer:

<https://blogs.msdn.microsoft.com/dotnet/2012/10/18/an-easy-solution-for-improving-app-launch-performance/>