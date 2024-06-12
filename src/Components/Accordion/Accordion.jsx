const Accordion = () => {
  const faq = [
    {
      que: "What types of car parts do you sell?",
      ans: "We sell a wide range of car parts including engines, brakes, suspension systems, exhausts, filters, batteries, and more. We cater to various makes and models to ensure you find the parts you need.",
    },
    {
      que: "Do you offer used or refurbished parts?",
      ans: "Yes, we offer both new and high-quality used or refurbished parts. Each part undergoes a thorough inspection and testing process to ensure it meets our quality standards.",
    },
    {
      que: "How can I find the right part for my car?",
      ans: "You can use our online search tool by entering your car's make, model, and year. Additionally, our customer support team is available to assist you in finding the correct part.",
    },
    {
      que: "How do I place an order?",
      ans: "You can place an order through our website by adding the desired parts to your cart and following the checkout process. Alternatively, you can call our customer service to place an order over the phone.",
    },
    {
      que: "What is your return policy?",
      ans: "We offer a 30-day return policy for unused and unopened parts in their original packaging. Please contact our customer service team to initiate a return and obtain a return authorization number",
    },
    {
      que: "Do your parts come with a warranty?",
      ans: "Yes, all new parts come with a manufacturer's warranty, and refurbished parts come with a 90-day warranty. Please refer to the specific part's listing for detailed warranty information.",
    },
    {
      que: "How do I schedule a repair service?",
      ans: "You can schedule a repair service through our website by selecting a date and time that works for you, or you can call our service center to make an appointment.",
    },
    {
      que: "Do you offer any discounts or promotions?",
      ans: "es, we offer various discounts and promotions throughout the year. Sign up for our newsletter to stay updated on the latest deals and special offers.",
    },
  ];
  return (
    <div className="text-center space-y-10">
      <span className="inline-block px-4 text-3xl font-bold border-b-rose-600 border-b-4 pb-2">
        Faq
      </span>
      <div className="grid lg:grid-cols-2 gap-8 place-items-center text-left ">
        <div className="join join-vertical w-full">
          {faq.map(({ que, ans }, i) => (
            <div className="collapse collapse-arrow join-item border bg-white border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium ">{que}</div>
              <div className="collapse-content">
                <p>{ans}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="h-[400px]">
          <img
            className="h-full"
            src="https://i.postimg.cc/J0ctHTMG/faq.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default Accordion;
