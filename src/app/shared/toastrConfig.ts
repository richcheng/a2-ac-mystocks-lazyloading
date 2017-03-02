import { ToastrConfig  } from 'ngx-toastr';
export const toastConfig: ToastrConfig = new ToastrConfig(
      {
        timeOut:5000,
        closeButton:true,
        enableHtml:true,
        extendedTimeOut:1000,
        progressBar:true,
        toastClass:'toast',
        positionClass:'toast-bottom-full-width',
        messageClass:'toast-message',
        tapToDismiss:false,
        onActivateTick:false
      }
    )