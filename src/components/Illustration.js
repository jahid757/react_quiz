import signupImg from "../assets/images/signup.svg";
import classes from "../styles/Illustration.module.css";
export default function Illustration() {
  return (
    <div class={classes.illustration}>
      <img src={signupImg} alt="Signup" />
    </div>
  );
}
