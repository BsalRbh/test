import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <div className="text-center py-24">
      <div>
        <p className=" px-5 py-1 bg-[#E5E7EB] w-fit mx-auto">Get in Touch</p>
        <p>
          What&#39;s next? Feel free to reach out to me if you&#39;re looking
          for a developer, have a query, or simply want to connect.
        </p>
      </div>
      <div>
        <span className="flex justify-center">
          <Icon icon="carbon:email" className="self-center mr-1" />
          <p> bsl.rbh@gmail.com</p>
        </span>
        <span className="flex justify-center">
          <Icon icon="fluent:call-32-regular" className="self-center mr-1" />
          <p> +9779863649611</p>
        </span>
      </div>
      <span className="flex justify-center pt-9">
        <Icon icon="ic:round-copyright" className="mr-1 self-center" />
        <p>2023 | Designed and coded by Bishal Rajbahak</p>
      </span>
    </div>
  );
};

export default Footer;
