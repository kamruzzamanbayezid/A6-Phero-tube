let fetchData;

// Step 1 || Tab Bar
const handleTabBar = async () => {
      const response = await fetch('https://openapi.programming-hero.com/api/videos/categories');
      const data = await response.json();

      const tabContainer = document.getElementById('tab-container');

      data.data.forEach(category => {
            const div = document.createElement('div');
            div.innerHTML = `
                        <a onclick="handleCategoryNews('${category.category_id}')" class="btn px-6 text-[#252525b3] font-medium hover:bg-[#FF1F3D] hover:text-white">${category.category}</a>
                        `;
            tabContainer.appendChild(div);
      });

};

// Step 2 || News category || News Cards
const handleCategoryNews = async (categoryId, sortData) => {

      const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
      const data = await response.json();

      const noDataContainer = document.getElementById('no-data-container');
      noDataContainer.innerHTML = '';
      if (data.data.length === 0) {
            const div = document.createElement('div');
            div.innerHTML = `
            <div class="flex justify-center items-center mt-10">
                  <img src="./photos/Icon.png" alt="">
            </div>
            <h3 class="text-[#171717] mb-28 text-center text-3xl font-bold mt-8">Oops!! Sorry, There is no content here</h3>
            `;
            noDataContainer.appendChild(div);
      }

      const newsContainer = document.getElementById('news-container');
      newsContainer.innerHTML = '';


      // Sort
      data.data.sort((a, b) => {
            const viewsA = parseInt(a.others.views.replace(/[^0-9]/g, ''), 10);
            const viewsB = parseInt(b.others.views.replace(/[^0-9]/g, ''), 10);
            return viewsB - viewsA;
      });

      data.data.forEach(categoryNews => {

            const div = document.createElement('div');
            div.innerHTML = `
            <div class="bg-base-100">
                  <div class="relative">
                        <img class="w-[312px] h-[200px] rounded-lg mx-auto" src="${categoryNews.thumbnail}" alt="Shoes" />
                        <p class="text-white absolute top-[83%] left-[50%] bg-[#171717] w-fit px-1 rounded" id="posted-date">${categoryNews.others.posted_date}</p>
                  </div>
                  <div class=" mt-5">
                        <div class="flex gap-3 md:pl-7 lg:pl-0 justify-between">
                              <img class="w-[40px] h-[40px] mx-auto rounded-full" src="${categoryNews.authors[0].profile_picture}" alt="">
                              <div class="space-y-2 flex-1">
                                    <h3 class="text-[#171717] font-bold">${categoryNews.title}</h3>
                                    <div class="flex gap-2 items-center>
                                          <span class="text-[#171717b3] font-normal">${categoryNews.authors[0].profile_name}</span>
                                          ${categoryNews.authors[0].verified === true ? '<img src="./photos/fi_10629607.svg" alt="Verified Badge">' : ''}
                                    </div>
                                    <p class="text-[14px] font-normal text-[#171717b3]">${categoryNews.others.views} <span class="text-base">views</span></p>
                              </div>
                        </div>
                  </div>
            </div>
            `;

            // Posted Date 
            const postedDate = div.querySelector('#posted-date');
            const postedDateText = parseFloat(postedDate.innerText);
            const hours = Math.floor(postedDateText / 3600);
            const minutes = Math.floor((postedDateText % 3600) / 60);
            postedDate.innerText = `${hours} hrs ${minutes} min ago`;

            if (postedDate.innerText === 'NaN hrs NaN min ago') {
                  postedDate.classList.add('hidden');
            }

            newsContainer.appendChild(div);
      });
};

handleTabBar();
handleCategoryNews(1000);

