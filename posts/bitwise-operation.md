When you are reading the Byte from the hardware and you are interested in knowing which bit is ON and which is OFF. So one can perform the bitwise operation and can know the state. following function gives you the array of bits for a given byte.

Please feel free to comment and have any better ways, please express.

```

void ConvertToBitsArray(Byte B, out bool[] bitsArray)
     {
          int[] ai = new int[] { 1, 2, 4, 8, 16, 32, 64, 128 };
          bitsArray = new bool[8] { false, false, false, false, false, false, false, false };
          for (var i = 0; i < 7; i++)
              bitsArray[i] = Convert.ToBoolean(B & ai[i]); 
      }
```

Here is the small example on using this function:

```



using System;
using System.Collections;
namespace HarshaTestConsole
{
    class Program
    {
        
        public static void Main()
        {
            Byte b = 4; // 0000 0100;
            bool[] bits;
            ConvertToBitsArray(b, out bits);
            if (bits[2] == true)
            {
                Console.WriteLine("Third Bit is {0}",Convert.ToInt16(bits[2]));
            }
            
            Console.Read();
        }

        static void ConvertToBitsArray(Byte B, out bool[] bitsArray)
        {
            int[] ai = new int[] { 1, 2, 4, 8, 16, 32, 64, 128 };
            bitsArray = new bool[8] { false, false, false, false, false, false, false, false };
            for (var i = 0; i < 7; i++)
                  bitsArray[i] = Convert.ToBoolean(B & ai[i]); 
            
        }

    }
}
```