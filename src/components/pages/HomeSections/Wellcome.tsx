import scss from "./Wellcome.module.scss";

const Wellcome = () => {
  return (
    <section className={scss.Wellcome}>
      <div className="container">
        <div className={scss.content}>Wellcome</div>
      </div>
    </section>
  );
};

export default Wellcome;
