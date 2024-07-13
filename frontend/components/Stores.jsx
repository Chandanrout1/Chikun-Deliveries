import Link from "next/link";
import React from "react";

const Stores = () => {
  return (
    <>
      <div className="py-6 pl-16 font-sans">
        <p className="font-semibold text-xl">Shop by Stores</p>
        <p>Explore lists of Stores</p>
      </div>
      <div className="flex flex-row justify-evenly flex-wrap">
        {[
          {
            title: "Mohan Meat Center",
            rating: "4.5⭐",
            distance: "2.4 KM",
            description: "Best meat shop in Patia, Bhubaneswar",
            imageUrl:
              "https://media.istockphoto.com/id/1315903639/photo/raw-meats-on-butchers-shop-stock-image.jpg?s=612x612&w=0&k=20&c=j5zPwk5zjVJi2nWXHcMhl5pov5-sAKCWE-wrkJV9tNs=",
            altText: "Mohan Meat Center"
          },
          {
            title: "Manoj the Non-Veg World",
            rating: "4.2⭐",
            distance: "3.5 KM",
            description: "Top player in the category of mutton retailer",
            imageUrl:
              "https://images.hive.blog/0x0/https://files.peakd.com/file/peakd-hive/sanjeevm/Eq9UPhF5ySiiCphvkFRdSgpcWfRRXJqsU3MGYGoZjhq4VfRiEYQGQHxDSCk6ZGZ7Xwa.jpg",
            altText: "Manoj the Non-Veg World"
          },
          {
            title: "Haider Chicken Center",
            rating: "3.9⭐",
            distance: "1.3 KM",
            description: "Chicken center near Mathasahi, Bhubaneswar",
            imageUrl:
              "https://content.jdmagicbox.com/comp/balasore/z4/9999p6782.6782.221019183455.m1z4/catalogue/-dbg1n2w0zk-250.jpg",
            altText: "Haider Chicken Center"
          },
        ].map((store, index) => (
          <div key={index} className="bg-slate-200 w-96 shadow-xl p-8 ml-6 mb-10 rounded-md">
            <figure>
              <img className="w-80 h-80 rounded-md" src={store.imageUrl} alt={store.altText} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{store.title}</h2>
              <div className="flex flex-row justify-between">
                <h4>{store.rating}</h4>
                <h4>{store.distance}</h4>
              </div>
              <p>{store.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        
        <Link href="/stores">
        <button className="btn btn-xs mb-10 bg-cyan-400 sm:btn-sm md:btn-md lg:btn-lg">More Shops</button>
        </Link>
      </div>
    </>
  );
};

export default Stores;
