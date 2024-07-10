import Header from "@/components/HeaderComponent";
import FooterComponent from "@/components/Footer";

export default function HomeLayout({ children }) {
  return (
     <div className="w-full bg-[#FBFAF6]">
       <Header />
       {/* <div className="px-[5px] md:px-[60px] lg:px-[90px]"> */}
        <div>
        {children}
       <FooterComponent />
       </div>
    </div>
  )
}