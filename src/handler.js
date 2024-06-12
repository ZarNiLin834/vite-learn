import swal from "sweetalert";
import { listGroup, taskInput } from "./selectors";

export const addBtnHandler = () => {
    // console.log("U click btn"); 
    // console.log(taskInput.value);
  const list = document.createElement("li");
  list.innerText = taskInput.value;
  listGroup.append(list);
  taskInput.value = "";
};

export const alertBtnHandler = () => {
  // console.log("Click alert"); 
//   swal(
//     {
//       title: "Good job!",
//       text: "You clicked the button!",
//       icon: "success",
//       button: "Aww yiss!",
//     }
//   );

  // swal("Good job!", "You clicked show alert button!", "success");

  swal({
    title: "Are you sure?",
    text: "Once deleted, you won't be able to recover this imaginary file!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      swal("Poof! Your imaginary file has been deleted!", { icon: "success" });
    } else {
      swal("Your imaginary file is safe!");
    }
  });

};