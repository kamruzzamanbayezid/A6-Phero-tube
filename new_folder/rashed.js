function loadBtn() {
      fetch('https://openapi.programming-hero.com/api/videos/categories')
            .then(res => res.json())

            .then(data => displayBtn(data))
}

function displayBtn(data) {
      const buttons = data.data;
      // console.log(buttons);
      const btnContainer = document.getElementById('btn-container');
      buttons.forEach(button => {
            // console.log(button);
            const div = document.createElement('div');
            div.innerHTML = `
          <a onclick="loadPhone('${button.category_id}')" class="tab">${button.category}</a>
          `;
            btnContainer.appendChild(div);
      });

}





function loadPhone(btnId, isSort) {
      fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`
            .then(res => res.json())
            .then(data => displayVideo(data, isSort))
      )
}



function displayVideo(data, isSort) {
      const videos = data.data;
      // console.log(videos);



      if (isSort = 0) {
            const sorryContainer = document.getElementById('sorry-container');
            sorryContainer.innerHTML = '';
            if (data.data.length === 0) {
                  const div = document.createElement('div');
                  div.innerHTML = `
              <div class="flex justify-center items-center mt-10">
              <img src="./image/Icon.png" alt="">
              </div>
              <h3 class="text-[#171717] mb-28 text-center text-3xl font-bold mt-8">Oops!! Sorry, There is no content here</h3>
              `;
                  sorryContainer.appendChild(div);

            }






            // 1 create a phone card container 
            const videoContainer = document.getElementById('video-container');
            videoContainer.innerHTML = '';


            // api date section
            function convertTime(seconds) {

                  const hours = Math.floor(seconds / 3600);
                  const minutes = Math.floor((seconds % 3600) / 60);
                  seconds = seconds % 60;
                  const hourString = hours == 0 && minutes == 0 ? ' ' : ${ hours }hrs ${ minutes } mins ago;
                  return hourString;

            }






            videos.sort((a, b) => {
                  const viewsA = parseInt(a.others.views.replace(/[^0-9]/g, ''), 10);
                  const viewsB = parseInt(b.others.views.replace(/[^0-9]/g, ''), 10);
                  return viewsB - viewsA;
            });


            videos.forEach(video => {
                  // console.log(video);
                  var imgPath = video.authors[0].verified == true ? './image/bluetick.png' : ' ';
                  var postedDate = convertTime(video.others.posted_date);
                  const videoDatePath = video.others.posted_date;
                  // 2 create a div 
                  const videoCard = document.createElement('div');
                  videoCard.classList = 'card card-compact w-full  bg-base-100 shadow-xl';






                  // 3 set inner html 
                  videoCard.innerHTML = `
              
              
              
              <figure class="flex flex-col w-full relative">
              <img class='h-40 w-full' src="${video.thumbnail}" alt="Shoes" />
              <div class="-mt-10 ml-24">
                  <h4 id="date-time " class=" bottom-1 right-3 absolute   text-white bg-slate-600 text-xs  px-3 py-0">
                  ${postedDate}</h4>
              </div>
      
          </figure>
              
          
              <div class="card-body">
              
      
                  <div class="flex items-center">
                      <img class="mr-2 h-10 w-10 rounded-full" src="${video.authors[0].profile_picture}" alt="user">
                      <h3 class="text-[#171717] text-base font-bold">${video.title}</h3>
                  </div>
                  <div class="flex items-center">
                      <h4 class="mr-2 text-gray-500 font-normal">${video.authors[0].profile_name}</h4>
                      <span><img id="img-path" src="${imgPath}" alt=""></span>
                  </div>
                  <p class="mr-2 text-gray-500 font-normal">${video.others.views}</p>
              </div>
              `;



                  // 4 append child
                  videoContainer.appendChild(videoCard);








            });
      }
      else {
            const sorryContainer = document.getElementById('sorry-container');
            sorryContainer.innerHTML = '';
            if (data.data.length === 0) {
                  const div = document.createElement('div');
                  div.innerHTML = `
              <div class="flex justify-center items-center mt-10">
              <img src="./image/Icon.png" alt="">
              </div>
              <h3 class="text-[#171717] mb-28 text-center text-3xl font-bold mt-8">Oops!! Sorry, There is no content here</h3>
              `;
                  sorryContainer.appendChild(div);

            }






            // 1 create a phone card container 
            const videoContainer = document.getElementById('video-container');
            videoContainer.innerHTML = '';


            // api date section
            function convertTime(seconds) {

                  const hours = Math.floor(seconds / 3600);
                  const minutes = Math.floor((seconds % 3600) / 60);
                  seconds = seconds % 60;
                  const hourString = hours == 0 && minutes == 0 ? ' ' : ${ hours }hrs ${ minutes } mins ago;
                  return hourString;

            }








            videos.forEach(video => {
                  // console.log(video);
                  var imgPath = video.authors[0].verified == true ? './image/bluetick.png' : ' ';
                  var postedDate = convertTime(video.others.posted_date);
                  const videoDatePath = video.others.posted_date;
                  // 2 create a div 
                  const videoCard = document.createElement('div');
                  videoCard.classList = 'card card-compact w-full  bg-base-100 shadow-xl';






                  // 3 set inner html 
                  videoCard.innerHTML = `
              
              
              
              <figure class="flex flex-col w-full relative">
              <img class='h-40 w-full' src="${video.thumbnail}" alt="Shoes" />
              <div class="-mt-10 ml-24">
                  <h4 id="date-time " class=" bottom-1 right-3 absolute   text-white bg-slate-600 text-xs  px-3 py-0">
                  ${postedDate}</h4>
              </div>
      
          </figure>
              
          
              <div class="card-body">
              
      
                  <div class="flex items-center">
                      <img class="mr-2 h-10 w-10 rounded-full" src="${video.authors[0].profile_picture}" alt="user">
                      <h3 class="text-[#171717] text-base font-bold">${video.title}</h3>
                  </div>
                  <div class="flex items-center">
                      <h4 class="mr-2 text-gray-500 font-normal">${video.authors[0].profile_name}</h4>
                      <span><img id="img-path" src="${imgPath}" alt=""></span>
                  </div>
                  <p class="mr-2 text-gray-500 font-normal">${video.others.views}</p>
              </div>
              `;



                  // 4 append child
                  videoContainer.appendChild(videoCard);








            });
      }






}





loadPhone();
loadBtn()
loadPhone(1000);