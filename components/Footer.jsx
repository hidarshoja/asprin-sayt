import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-8">
    <div className="container mx-auto px-4">
    <div className="mb-6 py-8 flex flex-col items-center lg:px-10 border-b border-[#e0e0e0]">
      <div className="flex items-center gap-2">
           <img src="/logo2.svg" alt="" />
          <h3 className="text-lg font-bold mb-2">دکتر آسپرین</h3>
      </div>
          <p className="text-sm text-center mt-8">
            دکتردآسپرین راه نوبت دهی اینترنتی و مشاوره آنلاین پزشکان ایران است. پزشکان به کمک دکتردآسپیرین میتوانند امکان نوبت دهی اینترنتی و مشاوره تلفنی خود را فعال کنند. به این ترتیب بیمار برای نوبت گیری از دکتر نیاز به روش‌هایی مانند تلفن زدن یا مراجعه حضوری ندارد.
          </p>
        </div>
      <div className="flex flex-col md:flex-row justify-between">
       
        <div className="md:flex md:flex-1 justify-between">
          <div className="mb-6 md:mb-0">
            <h4 className="text-md font-semibold mb-2">صفحات سایت</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="#">صفحه اصلی</a></li>
              <li><a href="#">نوبت دهی</a></li>
              <li><a href="#">خدمات</a></li>
              <li><a href="#">درباره ما</a></li>
              <li><a href="#">پوشش</a></li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0">
            <h4 className="text-md font-semibold mb-2">تخصص‌های پر بازدید</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="#">متخصص مغز و اعصاب</a></li>
              <li><a href="#">متخصص پوست و مو</a></li>
              <li><a href="#">دکتر دندان پزشک</a></li>
              <li><a href="#">دکتر چشم پزشک</a></li>
              <li><a href="#">متخصص کودکان</a></li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0">
            <h4 className="text-md font-semibold mb-2">بیماری‌های شایع</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="#">غدد درون ریز</a></li>
              <li><a href="#">گوارش و کبد</a></li>
              <li><a href="#">قلب و عروق</a></li>
              <li><a href="#">نفروپاتی</a></li>
              <li><a href="#">نورولوژی</a></li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0">
            <h4 className="text-md font-semibold mb-2">دسترسی‌های سریع</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="#">عضویت / ورود</a></li>
              <li><a href="#">مشاهده تجربیات بیماران</a></li>
              <li><a href="#">تماس با پشتیبانی</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center text-xs mt-6">
        تمامی حقوق مادی و معنوی متعلق به دکترآسپیرین می‌باشد.
      </div>
    </div>
  </footer>
  );
}
