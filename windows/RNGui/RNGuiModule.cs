using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Gui.RNGui
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNGuiModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNGuiModule"/>.
        /// </summary>
        internal RNGuiModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNGui";
            }
        }
    }
}
