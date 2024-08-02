import { useEffect, useState } from "react";

const Mobiles = () => {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    fetch("./mobiles.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <div className="text-center text-3xl mt-10 font-semibold text-[#f4952a]">
        Our Mobiles
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 py-10 px-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="card card-compact bg-base-100 rounded-xl  shadow-xl">
            <figure>
              <img className="h-60" src={item?.mobilePic} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Name : {item?.name}</h2>
              <h2 className="card-title">Price : {item?.price}</h2>
              <h2 className="card-title">ROM : {item?.ROM}</h2>
              <h2 className="card-title">RAM : {item?.ram}</h2>
              <h2 className="card-title">Processor : {item?.processor}</h2>
              <h2 className="card-title">Battery : {item?.battery}</h2>
              <h2 className="card-title">Launch Date : {item?.launchDate}</h2>

              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mobiles;
