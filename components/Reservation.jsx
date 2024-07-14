import React from 'react';

export default function ReservationSteps() {
  const steps = [
    {
      icon: "/profile.png",
      title: "ورود / ثبت نام در سایت",
      description: "اگر کاربر حساب کاربری دارد، می‌تواند با وارد کردن اطلاعات خواسته شده وارد سایت شود. اگر ندارد، باید ثبت‌نام کند."
    },
    {
      icon: "/search.png",
      title: "جستجوی پزشک",
      description: "کاربر از طریق فیلد جستجو در صفحه اصلی یا از منوی سایت به بخش جستجوی پزشکان دسترسی پیدا می‌کند."
    },
    {
      icon: "/calendar.png",
      title: "انتخاب روز و ساعت نوبت",
      description: "کاربر از تقویم نوبت پزشک موجود، زمان‌های خالی برای رزرو نوبت را مشاهده می‌کند، زمان مناسب را انتخاب و تایید می‌کند."
    },
    {
      icon: "/money.png",
      title: "پرداخت آنلاین",
      description: "کاربر اطلاعات کارت اعتباری خود را وارد کرده و هزینه نوبت خود را پرداخت می‌کند و رسید برای او ارسال می‌شود."
    }
  ];

  return (
    <div className="w-full bg-white py-12">
      <div>
        <h2 className="text-[14px] lg:text-[30px] font-bold text-[#35383F] mb-6 text-start">مراحل رزرو نوبت آنلاین</h2>
        <div className="flex flex-col lg:flex-row gap-6 mt-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-full lg:w-1/4 text-center relative z-10">
              <div className="mb-4">
                <div className='bg-[#F5F5F5] flex items-center justify-center rounded-full w-12 lg:w-[82px] h-12 lg:h-[82px]'>
                 <img src={step.icon} className='w-6 lg:w-12 h-6 lg:h-12' alt="" />
                </div>
              </div>
              <h3 className="text-[14px] lg:text-[20px] font-medium mb-2">{step.title}</h3>
              <p className="text-[12px] lg:text-[14px] text-[#616161] font-normal">{step.description}</p>
              {index < steps.length - 1 && (
                <img src="/Line.png" className='w-[20px] hidden lg:block h-6 absolute left-[-20px] top-[50%] z-0' alt="" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
