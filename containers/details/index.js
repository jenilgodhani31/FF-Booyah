import Ads from '@components/Ads';
import Layout from '@components/Layout';
import gameData from 'data/gameData';
import { useRouter } from 'next/router';
import React, { Fragment } from 'react';

// Function to get data from any category
const getItemData = (category, item) => {
  return gameData[category]?.find((data) => data.name === item);
};

function Details() {
  const router = useRouter();
  const { item, category, url } = router.query;

  if (!router.isReady) return <p>Loading...</p>;
  console.log("item", item)
  console.log("category", category)

  const data = getItemData(category, item);

  console.log("Data", url)

  return (
    <Layout>
      <div className="flex flex-col gap-5 mx-auto h-max ls:w-[360px] pt-[100px]">

        <div className="flex items-center justify-center px-5">
          {data ? (
            <div>
              <img src={data.url} alt={data.name} className="max-h-48 max-w-full" />
            </div>
          ) : (
            <div>
              <img src={url} className="max-h-48 max-w-full" />
            </div>
          )}
        </div>
        <div className='pb-10'>
          <Ads
            data-ad-slot="3391625680"
            data-ad-format="auto"
            data-full-width-responsive="true" />
        </div>
        <div className="bg-[url('/resources/bg-details.png')] bg-no-repeat bg-cover bg-top px-6 pb-6 pt-7 rounded-t-3xl fixed left-0 bottom-0 w-full md:w-[375px] md:left-1/2 md:-translate-x-1/2">
          <div>
            <a href='/players'>
              <button className="flex items-center justify-center py-2.5 rounded-xl w-full bg-gradient-to-r from-purple-700 via-purple-500 to-blue-400">
                <span className="text-white text-lg leading-6 font-bold text-center">Apply Now</span>
              </button>
            </a>

          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Details;
