As we all know WPF uses DirectX for rendering through MILCore. Rendering Tier will tell us whether Hardware accelaration is in use.

i.e,

```
int renderingTier =
(System.Windows.Media.RenderCapability.Tier >> 16)
```

renderingTier can be 0, 1, 2.

more details are here:  
<https://msdn.microsoft.com/en-us/library/system.windows.media.rendercapability.tier(v=vs.110).aspx>

but based on the rederingTier, one can set RnderMode

```
HwndSource hwndSource = PresentationSource.FromVisual(this) as HwndSource;
HwndTarget hwndTarget = hwndSource.CompositionTarget;
hwndTarget.RenderMode = RenderMode.SoftwareOnly;
```

but one has to set RenderMode in every window and there is no solution to set to entire application at once.

but from .net 4.0 we can set  
RenderOptions.ProcessRenderMode = RenderMode.SoftwareOnly;

OnStartup method in Application which will set to entire application at once.

So in .net 4.0 or above

```
using System.Windows;
using System.Windows.Media;

namespace RenderCapabilityDemo
{
    /// <summary>
    /// Interaction logic for App.xaml
    /// </summary>
    public partial class App : Application
    {
        protected override void OnStartup(StartupEventArgs e)
        {
            base.OnStartup(e);
            if (ForceSoftwareRender)
            {
                RenderOptions.ProcessRenderMode =        System.Windows.Interop.RenderMode.SoftwareOnly;
            }
        }

        private bool ForceSoftwareRender
        {
            get
            {
                return (System.Windows.Media.RenderCapability.Tier >> 16) ==0 ;
            }
        }
    }
}
```