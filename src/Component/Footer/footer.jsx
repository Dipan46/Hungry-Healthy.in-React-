import "./footer.css";

function Footer() {
  let year = new Date().getFullYear();
  return (
    <footer>
      <div class="center">Copyright &copy;{year}</div>
    </footer>
  );
}
export default Footer;
