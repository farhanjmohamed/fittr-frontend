export function About() {
  return (
    <div className="h-screen">
      <section>
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <h2 class="text-3xl font-bold sm:text-4xl m-auto text-center">ABOUT</h2>
          <div class="max-w-3xl"></div>
          <br />

          <div class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div class="relative h-64 overflow-hidden sm:h-80 lg:h-full">
              <img src="capstone.svg" class="absolute inset-0 h-full w-full object-contain" />
            </div>

            <div class="lg:py-16">
              <article class="space-y-4 text-gray-600">
                <p>Welcome to Fittr!</p>
                <p>
                  We're so glad you're here. At Fittr, we believe that getting dressed should be easy and stress-free.
                  That's why we offer a range of services to help you organize your closet and create the perfect
                  outfits. Once your closet is organized, we'll help you create a wardrobe full of versatile pieces that
                  can be mixed and matched to create endless outfit options. Whether you need a new outfit for work, a
                  special event, or just a night out with friends, we've got you covered. Thank you for choosing Fittr.
                  We can't wait to help you love getting dressed every day.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
