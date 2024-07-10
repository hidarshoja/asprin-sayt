import React from "react";
import { FaStar, FaSmile, FaFrown } from "react-icons/fa";

const comments = [
  {
    user: "محمد فرساد",
    date: "1402/06/24",
    rating: 4.3,
    comment:
      "بهترین وبسایت جهان اینجاست کجا میخوای بری نرووووووو ما اینجا بهترین اطلاعات درمان را ارایه میکنیم.",
    liked: true,
  },
  {
    user: "محمد فرساد",
    date: "1402/06/24",
    rating: 4.3,
    comment:
      "بهترین وبسایت جهان اینجاست کجا میخوای بری نرووووووو ما اینجا بهترین اطلاعات درمان را ارایه میکنیم.",
    liked: true,
  },
  {
    user: "محمد فرساد",
    date: "1402/06/24",
    rating: 4.3,
    comment:
      "بهترین وبسایت جهان اینجاست کجا میخوای بری نرووووووو ما اینجا بهترین اطلاعات درمان را ارایه میکنیم.",
    liked: true,
  },
  {
    user: "محمد فرساد",
    date: "1402/06/24",
    rating: 1.3,
    comment:
      "بهترین وبسایت جهان اینجاست کجا میخوای بری نرووووووو ما اینجا بهترین اطلاعات درمان را ارایه میکنیم.",
    liked: false,
  },
  {
    user: "محمد فرساد",
    date: "1402/06/24",
    rating: 4.3,
    comment:
      "بهترین وبسایت جهان اینجاست کجا میخوای بری نرووووووو ما اینجا بهترین اطلاعات درمان را ارایه میکنیم.",
    liked: true,
  },
];

const UserComments = () => {
  return (
    <div className="pl-6 pr-1">
   
      <div className="flex items-center w-full justify-between py-4 border-b ">
        <h2 className="text-lg pl-8 pr-1 rounded-tl-full py-1 font-semibold mb-2 bg-[#FFF9E5] text-[#31546B]">نظرات کاربران</h2>
        <div className="text-base font-bold text-[#5B7380] mb-4">96 نفر</div>
      </div>
      <div className="overflow-y-auto h-64  p-2">
        {comments.map((comment, index) => (
          <div
            key={index}
            className="flex items-start mb-4 pb-2 border-b border-gray-200"
          >
            <div className="flex-1">
              <div className="flex justify-between mb-1">
                <div className="flex gap-3">
                  <div className="text-sm text-gray-500">{comment.user}</div>
                  <div className="text-sm text-gray-500">{comment.date}</div>
                </div>
                <div>
                  <div className="flex items-center justify-center gap-1 w-12 h-8 bg-gray-100 rounded-xl mr-4">
                    <span className="ml-1 text-gray-700">{comment.rating}</span>
                    <FaStar className="text-yellow-400" />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {comment.liked ? (
                  <span className="text-green-500 flex items-center">
                    <FaSmile />
                  </span>
                ) : (
                  <span className="text-red-500 flex items-center">
                    <FaFrown />
                  </span>
                )}
                <p className="text-gray-700 text-sm mb-2">{comment.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 pl-8 pr-1 relative">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">
          <div className="flex items-center gap-2">
            <input type="text" placeholder="محمد فرساد" className="w-32 h-7 rounded-sm outline-none fill-[#f5f5f5] border px-1" />
            <span className="text-green-500 flex items-center">
              <FaSmile />
            </span>
            <span className="text-red-500 flex items-center">
              <FaFrown />
            </span>
          </div>
          <div className="flex flex-col lg:flex-row md:items-center gap-2">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              به خدمات دهنده چند امتیاز میدی؟
            </label>
            <div className="flex items-center mb-4">
              <FaStar className="text-gray-300 text-xl" />
              <FaStar className="text-gray-300 text-xl" />
              <FaStar className="text-gray-300 text-xl" />
              <FaStar className="text-gray-300 text-xl" />
              <FaStar className="text-gray-300 text-xl" />
            </div>
          </div>
        </div>
        <textarea
          className="w-full h-24 p-2 border border-gray-300 rounded-md mb-2"
          placeholder="نظرتان را بنویسید..."
        ></textarea>
        <div className="w-full flex items-end justify-end absolute left-12 bottom-8">
        <button className="px-3 py-1 bg-[#FBFAF6] border border-[#D0D0D0] text-[#979797] text-sm font-semibold rounded">
          ارسال نظر
        </button>
        </div>
        <div className="mt-4 text-gray-400 text-xs">
          آسپرین هیچگونه مسولیتی در قبال تایید محتوای نظرات ندارد.
        </div>
      </div>
   
    </div>
  );
};

export default UserComments;
