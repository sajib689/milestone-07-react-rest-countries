const Countries = (country) => {
  console.log(country.country);
  return (
    <>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={country.country.flags.png}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{country.country.name.common}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Countries;
