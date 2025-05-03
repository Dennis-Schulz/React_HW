import React, { useState } from "react";
import CityCard from "./CityCard";
import styles from "../components/styles/CitySelector.module.css";

const CitySelector = () => {
  const cities = [
    {
      name: "Токио",
      description:
        "Столица Японии, известная своими неоновыми огнями, многолюдностью и современной архитектурой.",
      imageUrl:[
        "https://www.topmagazine.cz/wp-content/uploads/2021/06/tokio-1024x576.jpg",
        "https://media.istockphoto.com/id/1390815938/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%82%D0%BE%D0%BA%D0%B8%D0%BE-%D0%B2-%D1%8F%D0%BF%D0%BE%D0%BD%D0%B8%D0%B8.jpg?s=612x612&w=0&k=20&c=T5HPPmBH2MVI2lltiNzgfBz1aZy1QEUKgLX8FUP4-MI=",
        "https://media.istockphoto.com/id/1283529752/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%86%D0%B2%D0%B5%D1%82%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B2%D0%B8%D1%88%D0%BD%D0%B8-%D0%B8-%D1%81%D1%82%D1%80%D0%BE%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D1%82%D0%B2%D0%BE-%D0%B2-%D0%BF%D0%B0%D1%80%D0%BA%D0%B5-%D0%B0%D1%81%D0%B0%D0%BA%D1%83%D1%81%D0%B0-%D1%81%D1%83%D0%BC%D0%B8%D0%B4%D0%B0.jpg?s=612x612&w=0&k=20&c=3KGheRnPEl41zMfYD1lrkTtFE8iaKZQ8X6FuAH8cvjw="
      ],
      facts: [
        "Токио - самый населенный мегаполис в мире.",
        "Здесь расположена самая высокая башня в Японии - Токийская башня.",
        "В Токио проходят множество культурных событий и фестивалей.",
      ],
    },
    {
      name: "Киото",
      description:
        "Город на острове Хонсю, известный своими многочисленными классическими буддийскими храмами...",
      imageUrl:[
        "https://media.istockphoto.com/id/902966276/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BA%D0%B8%D0%BE%D1%82%D0%BE-%D1%8F%D0%BF%D0%BE%D0%BD%D0%B8%D1%8F-%D0%B2%D0%B5%D1%81%D0%BD%D0%BE%D0%B9.jpg?s=612x612&w=0&k=20&c=zwyls495a2uY7s9VYaIRm_4_sbaIJ4TflzmDRfnUGKs=",
        "https://media.istockphoto.com/id/2149902750/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BA%D0%B8%D0%BE%D1%82%D0%BE-%D1%8F%D0%BF%D0%BE%D0%BD%D0%B8%D1%8F-%D0%B2-%D0%B7%D0%B0%D0%BB%D0%B8%D0%B2%D0%B5-%D0%B8%D0%BD%D0%B5.jpg?s=612x612&w=0&k=20&c=GNA2lkYZC74EhNWDsvvEgEHx-9gSe5fPPp3-AggCGYg=",
        "https://media.istockphoto.com/id/1217375820/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BF%D0%B0%D0%B3%D0%BE%D0%B4%D0%B0-%D1%8F%D1%81%D0%B0%D0%BA%D0%B0-%D0%BA%D0%B8%D0%BE%D1%82%D0%BE-%D1%8F%D0%BF%D0%BE%D0%BD%D0%B8%D1%8F.jpg?s=612x612&w=0&k=20&c=c3yEsZzqyxCKN_gkXf27w_A9ddPI71A5XVp9WrxP9H0="
      ],
      facts: [
        "В Киото насчитывается более 1600 буддийских храмов.",
        "Этот город был столицей Японии более тысячи лет.",
      ],
    },
    {
      name: "Осака",
      description:
        "Город в центральной части острова Хонсю, известен своими современными достопримечательностями...",
      imageUrl:[
        "https://media.istockphoto.com/id/1481911264/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BE%D1%81%D0%B0%D0%BA%D0%B0-%D1%8F%D0%BF%D0%BE%D0%BD%D0%B8%D1%8F.jpg?s=612x612&w=0&k=20&c=ImKP7BEvNSBKGG_08IF_Iuc82agdLN8uu__jUyi-Bd8=",
        "https://media.istockphoto.com/id/1138049211/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%82%D0%BE%D1%80%D0%B3%D0%BE%D0%B2%D0%B0%D1%8F-%D1%83%D0%BB%D0%B8%D1%86%D0%B0-%D0%B4%D0%BE%D1%82%D0%BE%D0%BD%D0%B1%D0%BE%D1%80%D0%B8-%D0%B2-%D0%BE%D1%81%D0%B0%D0%BA%D0%B5-%D1%8F%D0%BF%D0%BE%D0%BD%D0%B8%D1%8F.jpg?s=612x612&w=0&k=20&c=WfoBtsHIJLZ_W4WKAmfZBjDL4Go6EkFQyBDSl1uQoTc=",
        "https://media.istockphoto.com/id/599714594/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BE%D1%81%D0%B0%D0%BA%D0%B0-%D0%B1%D0%B0%D1%88%D0%BD%D1%8F-%D0%B8-%D0%B2%D0%B8%D0%B4-%D0%BD%D0%B5%D0%BE%D0%BD%D0%BE%D0%B2%D0%B0%D1%8F-%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D0%B0-shinsekai-%D1%80-%D0%BD.jpg?s=612x612&w=0&k=20&c=QYOqPTMFHUF8xsD-FJmZ8gMtF0D-ucUAW9--avFI8Vc="
      ],
      facts: [
        "Осака известна своим замком...",
        "Город является кулинарной столицей Японии.",
      ],
    },
    {
      name: "Хоккайдо",
      description:
        "Самый северный остров Японии, известный своей природой, снежными фестивалями...",
      imageUrl:[
        "https://voyagejapan.com/getimg/300/250/crop/fill/files/core/19_image.jpg",
        "https://voyagejapan.com/getimg/300/250/crop/fill/files/core/219_image.jpg",
        "https://voyagejapan.com/getimg/300/250/crop/fill/files/core/220_image.jpg",]
      ,
      facts: [
        "Хоккайдо предлагает отличные условия для зимних видов спорта...",
        "Летом остров привлекает туристов своими цветущими лавандовыми полями.",
      ],
    },
    {
      name: "Нагоя",
      description:
        "Город в центре Хонсю, известен своим отраслевым влиянием и историческими достопримечательностями.",
      imageUrl:[
        "https://media.istockphoto.com/id/698891632/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B7%D0%B0%D0%BC%D0%BE%D0%BA-%D0%BD%D0%B0%D0%B3%D0%BE%D1%8F-%D1%8F%D0%BF%D0%BE%D0%BD%D0%B8%D1%8F.jpg?s=612x612&w=0&k=20&c=8BoFSmHP-3-eEUyS6i_pwB76w6tG9BtcmVjcLzb0P6k=",
        "https://media.istockphoto.com/id/2156701872/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BF%D1%80%D1%83%D0%B4-%D1%81-%D1%8F%D0%BF%D0%BE%D0%BD%D1%81%D0%BA%D0%B8%D0%BC%D0%B8-%D0%B8%D1%80%D0%B8%D1%81%D0%B0%D0%BC%D0%B8-%D0%B2-%D0%BF%D0%B0%D1%80%D0%BA%D0%B5-%D1%86%D1%83%D1%80%D1%83%D0%BC%D0%B0.jpg?s=612x612&w=0&k=20&c=CVpeu-iWV45qUuACR_Vgcy0E4o5zKVyC-Y0P33PF5-M=",
        "https://media.istockphoto.com/id/1495262916/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BD%D0%B0%D0%B3%D0%BE%D0%B9%D1%81%D0%BA%D0%B0%D1%8F-%D1%82%D0%B5%D0%BB%D0%B5%D0%B1%D0%B0%D1%88%D0%BD%D1%8F-%D0%B8-%D0%BE%D0%B0%D0%B7%D0%B8%D1%81-%D0%BD%D0%B0%D0%B3%D0%BE%D1%8F-21.jpg?s=612x612&w=0&k=20&c=vha9e3g_4qhpR7AHDfgU_uewGgXnNZN6jsUcHPTcydw=",],
      facts: [
        "Нагоя - один из важнейших промышленных городов Японии...",
        "Здесь находится известный Нагойский замок...",
      ],
    },
  ];

  const [selectedCity, setSelectedCity] = useState(null);

  const handleChange = (e) => {
    const cityName = e.target.value;
    const foundCity = cities.find((c) => c.name === cityName);
    setSelectedCity(foundCity);
  };

  return (
    <div className={styles.container}>
      <h2>Выберите город</h2>
      <select style={{ fontSize: "18px", borderRadius: "5px"}} onChange={handleChange} defaultValue="">
        <option value="" disabled>-- выбрать --</option>
        {cities.map((c, index) => (
          <option key={index} value={c.name}>
            {c.name}
          </option>
        ))}
      </select>

      {selectedCity && <CityCard city={selectedCity} />}
    </div>
  );
};

export default CitySelector;
