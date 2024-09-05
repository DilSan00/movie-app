const SectionContainer = ({ className, children }) => {
  return (
    <section className={ className }>
      <div className="container">
        { children }
      </div>
    </section>
  );
}


export default SectionContainer