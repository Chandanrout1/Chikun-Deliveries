import React from 'react'

const Shoplist = () => {
  return (
    <>
      <div className="flex flex-row justify-evenly flex-wrap mt-10">
        {[
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
          {
            title: "Falcon chilika fresh, Sailashree Vihar",
            rating: "4.3⭐",
            distance: "5.2 KM",
            description: "Wide range of fish and seafood ",
            imageUrl:
              "https://lh5.googleusercontent.com/p/AF1QipNXd19BYa3vbzM0kne4vsJ1RzPrKOHAp7KUVqbp=w408-h306-k-no",
            altText: "falcon chilika fresh"
          },
          {
            title: "Bismillah Mutton Center",
            rating: "4.1⭐",
            distance: "3.8 KM",
            description: "Mutton center near Patia,Bhubaneswar",
            imageUrl:
              "https://pr1.nicelocal.in/baDU2tf0Y0fMDPbVpkqSvw/541x440,q85/4px-BW84_n0QJGVPszge3NRBsKw-2VcOifrJIjPYFYkOtaCZxxXQ2VrjZm8FZ9DbWYH8QPi8YDmKJedGI4tsnHz1fSHR9gJ8foLuEUM08wLSI9s8L5xT2A",
            altText: "Bismillah Mutton Center"
          },
          {
            title: "Falcon chilika fresh, Rasulgarh",
            rating: "4.2⭐",
            distance: "3.5 KM",
            description: "Wide range of fish and seafood",
            imageUrl:
              "https://lh5.googleusercontent.com/p/AF1QipP0vidAJ7gzs_vyHC7E0jxt6M1OjOWimnNZK6ew=w426-h240-k-no",
            altText: "Falcon chilika fresh, Rasulgarh"
          },{
            title: "Mohan Meat Center",
            rating: "4.5⭐",
            distance: "2.4 KM",
            description: "Best meat shop in Patia, Bhubaneswar",
            imageUrl:
              "https://media.istockphoto.com/id/1315903639/photo/raw-meats-on-butchers-shop-stock-image.jpg?s=612x612&w=0&k=20&c=j5zPwk5zjVJi2nWXHcMhl5pov5-sAKCWE-wrkJV9tNs=",
            altText: "Mohan Meat Center"
          },{
            title: "Falcon chilika fresh, Jagamara",
            rating: "4.1⭐",
            distance: "7.3 KM",
            description: "Wide range of fish and seafood",
            imageUrl:
              "https://lh5.googleusercontent.com/p/AF1QipPsnLBshPBMsm0sGA20dVq1GNfOMyTnEsgfP0Ff=w408-h306-k-no",
            altText: "Falcon chilika fresh, Jagamara"
          },{
            title: "My fresh Planet",
            rating: "3.8⭐",
            distance: "2.3 KM",
            description: "Various range of fish and Meat",
            imageUrl:
              "https://pr0.nicelocal.in/bANzwiJdMQ_SVY_wwKBTeA/1120x700,q85/4px-BW84_n0QJGVPszge3NRBsKw-2VcOifrJIjPYFYkOtaCZxxXQ2eOjTZfLxhALdug_Gt1_3YuSpbt5iy6k_WQleGklzYILtc3xuZJR8wyXXqJ1xXoG-Q",
            altText: "My fresh planet"
          },{
            title: "E-meat",
            rating: "4.3⭐",
            distance: "3.7 KM",
            description: "Frozen fish, dry fish, and meat retailer providing fresh and hygienic food products",
            imageUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj6pzLxn-pxSlaHovHSYEGfsDBfKFZIhC63g&s",
            altText: "E-meat"
          },{
            title: "Falcon chilika fresh, Khandagiri",
            rating: "4.4⭐",
            distance: "5.3 KM",
            description: "Wide range of fish and seafood",
            imageUrl:
              "https://lh5.googleusercontent.com/p/AF1QipPZa2tERWz0o359W7v6F_rAnRVCjZceEZO9X2sE=w408-h306-k-no",
            altText: "Falcon chilika fresh, Khandgiri"
          },
          {
            title: "Hamid Chicken Center",
            rating: "3.5⭐",
            distance: "5.3 KM",
            description: "Chicken center near Old Town,Bhubaneswar",
            imageUrl:
              "https://lh3.googleusercontent.com/proxy/GjQ2DLMaRl94hkSoU7G7xQmlwtnM-tJJJMqmQiungzebEd20wRlqKJOrVa5PatTo4Q0nsQw6hgox3XfDHaMlrVcTmkfWWANTB-VwmQTBjwT8H8J8oyctaL1xugSlP_95I6GKun1R60VEpGAcTjeJuZqucBerKI6SHfn6pA=s1360-w1360-h1020",
            altText: "Hamdid Chicken Center"
          },
          {
            title: "Bulu Chicken Center",
            rating: "3.8⭐",
            distance: "4.3 KM",
            description: "Chicken center near V.S.S Nagar,Bhubaneswar",
            imageUrl:
              "https://pr1.nicelocal.in/T-g0HzIDp4353j_64P3ajA/1120x700,q85/4px-BW84_n2bwNWsh4g848PT4EpKp3bWnYUsgbUtKJ8ZgVELGs5D8aaFZVJClpgQ32nL34nZl-55CTZWD1XHETuCCayML7vtxi6zXO3MHAHOEIY0kLm_aeSQZJzoJs-no-PX7IWcoxI2nDUKlNgsd0krzBFsQFIUivixXLUwJQ7ysp0B5fhwBPoCcpCa6KGdICQlEiwPByC5grrbQyV9SPRb2n4AjVssCJJ9aUMMfdHRTubEszoDkeUIkEaDL7SJbdKnfqEuu7KY4BIf-Oi5Wj1ZSK8Cb3cfq0HeC5ax8bI",
            altText: "Bulu Chicken Center"
          },{
            title: "Bijay Mushrooms",
            rating: "4.4⭐",
            distance: "6.3 KM",
            description: "Various types of mushroom and paneer store",
            imageUrl:
              "https://pr0.nicelocal.in/AhVk0GxB7dM40q3XNg0fhg/569x440,q85/4px-BW84_n0QJGVPszge3NRBsKw-2VcOifrJIjPYFYkOtaCZxxXQ2dj4BISHKXjBB6d9ERiLQ2sFVsb_ohnHDB3DQEiG_D7gQkXFnpvcaCSmSQQMHciRkw",
            altText: "Bijay mushrooms"
          },{
            title: "Paneer Only",
            rating: "4.6⭐",
            distance: "5.3 KM",
            description: "Fresh paneer suppliers in bhubaneswar",
            imageUrl:
              "https://5.imimg.com/data5/VT/KW/MK/ANDROID-46873545/prod-20200622-2235313567203432338402909-jpg-250x250.jpg",
            altText: "Paneer Only"
          }
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
      </div>
    </>
  )
}

export default Shoplist