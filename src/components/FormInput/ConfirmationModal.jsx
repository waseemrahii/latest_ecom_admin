// ConfirmationModal.jsx
import swal from "sweetalert";

const ConfirmationModal = (options) => {
  const { title, text, icon = "warning", dangerMode = true } = options;

  return swal({
    title: title,
    text: text,
    icon: icon,
    buttons: true,
    dangerMode: dangerMode,
  });
};

export default ConfirmationModal;
