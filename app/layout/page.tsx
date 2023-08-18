"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Images from "next/image";
import Link from "next/link";

type HolomanMember = {
  name_jp: string;
  name_en: string;
  image: string;
  href: string;
  group: string[];
};

const Holoman = [
  {
    name_jp: "ときのそら",
    name_en: "Tokino Sora",
    image:
      "https://hololive.hololivepro.com/wp-content/uploads/2021/05/tokino_sora_thumb.png",
    href: "https://hololive.hololivepro.com/talents/tokino-sora/",
    group: ["0期生"],
  },
  {
    name_jp: "ロボ子さん",
    name_en: "Robocosan",
    image:
      "https://hololive.hololivepro.com/wp-content/uploads/2020/06/roboco-san_thumb.png",
    href: "https://hololive.hololivepro.com/talents/roboco-san/",
    group: ["0期生"],
  },
  {
    name_jp: "AZKi",
    name_en: "",
    image:
      "https://hololive.hololivepro.com/wp-content/uploads/2022/12/AZKi_list_thumb.png",
    href: "https://hololive.hololivepro.com/talents/azki/",
    group: ["0期生"],
  },
  {
    name_jp: "さくらみこ",
    name_en: "Sakura Miko",
    image:
      "https://hololive.hololivepro.com/wp-content/uploads/2023/02/Sakura-Miko_thumb.png",
    href: "https://hololive.hololivepro.com/talents/sakuramiko/",
    group: ["0期生"],
  },
  {
    name_jp: "星街すいせい",
    name_en: "Hoshimachi Suisei",
    image:
      "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Hoshimachi-Suisei_list_thumb-1.png",
    href: "https://hololive.hololivepro.com/talents/hoshimachi-suisei/",
    group: ["0期生"],
  },
  {
    name_jp: "夜空メル",
    name_en: "Yozora Mel",
    image:
      "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Yozora-Mel_list_thumb.png",
    href: "https://hololive.hololivepro.com/talents/yozora-mel/",
    group: ["1期生"],
  },
  {
    name_jp: "アキ・ローゼンタール",
    name_en: "Aki Rosenthal",
    image:
      "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Aki-Rosenthal_list_thumb.png",
    href: "https://hololive.hololivepro.com/talents/aki-rosenthal/",
    group: ["1期生"],
  },
  {
    name_jp: "赤井はあと",
    name_en: "Akai Haato",
    image:
      "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Akai-Haato_list_thumb.png",
    href: "https://hololive.hololivepro.com/talents/akai-haato/",
    group: ["1期生"],
  },
  {
    name_jp: "白上フブキ",
    name_en: "Shirakami Fubuki",
    image:
      "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Shirakami-Fubuki_list_thumb.png",
    href: "https://hololive.hololivepro.com/talents/shirakami-fubuki/",
    group: ["1期生", "ホロライブゲーマーズ"],
  },
  {
    name_jp: "夏色まつり",
    name_en: "Natsuiro Matsuri",
    image:
      "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Natsuiro-Matsuri_list_thumb.png",
    href: "https://hololive.hololivepro.com/talents/natsuiro-matsuri/",
    group: ["1期生"],
  },
  {
    name_jp: "湊あくあ",
    name_en: "Minato Aqua",
    image:
      "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Minato-Aqua_list_thumb.png",
    href: "https://hololive.hololivepro.com/talents/minato-aqua/",
    group: ["2期生"],
  },
  {
    name_jp: "紫咲シオン",
    name_en: "Murasaki Shion",
    image:
      "https://hololive.hololivepro.com/wp-content/uploads/2021/12/shion_thumb.png",
    href: "https://hololive.hololivepro.com/talents/murasaki-shion/",
    group: ["2期生"],
  },
  {
    name_jp: "百鬼あやめ",
    name_en: "Nakiri Ayame",
    image:
      "https://hololive.hololivepro.com/wp-content/uploads/2020/06/Nakiri-Ayame_list_thumb.png",
    href: "https://hololive.hololivepro.com/talents/nakiri-ayame/",
    group: ["2期生"],
  },
  {
    name_jp: "癒月ちょこ",
    name_en: "Yuzuki Choco",
    image:
      "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Yuzuki-Choco_list_thumb.png",
    href: "https://hololive.hololivepro.com/talents/yuzuki-choco/",
    group: ["2期生"],
  },
  {
    name_jp: "大空スバル",
    name_en: "Oozora Subaru",
    image:
      "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Oozora-Subaru_list_thumb.png",
    href: "https://hololive.hololivepro.com/talents/oozora-subaru/",
    group: ["2期生"],
  },
  {
    name_jp: "大神ミオ",
    name_en: "Ookami Mio",
    image:
      "https://hololive.hololivepro.com/wp-content/uploads/2023/01/Ookami-Mio_thumb.png",
    href: "https://hololive.hololivepro.com/talents/ookami-mio/",
    group: ["ホロライブゲーマーズ"],
  },
  {
    name_jp: "猫又おかゆ",
    name_en: "Nekomata Okayu",
    image:
      "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Nekomata-Okayu_list_thumb.png",
    href: "https://hololive.hololivepro.com/talents/nekomata-okayu/",
    group: ["ホロライブゲーマーズ"],
  },
  {
    name_jp: "戌神ころね",
    name_en: "Inugami Korone",
    image:
      "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Inugami-Korone_list_thumb.png",
    href: "https://hololive.hololivepro.com/talents/inugami-korone/",
    group: ["ホロライブゲーマーズ"],
  },
  {
    name_jp: "兎田ぺこら",
    name_en: "Usada Pekora",
    image:
      "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Usada-Pekora_list_thumb.png",
    href: "https://hololive.hololivepro.com/talents/usada-pekora/",
    group: ["3期生"],
  },
  {
    name_jp: "不知火フレア",
    name_en: "Shiranui Flare",
    image:
      "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Shiranui-Flare_list_thumb.png",
    href: "https://hololive.hololivepro.com/talents/shiranui-flare/",
    group: ["3期生"],
  },
  {
    name_jp: "白銀ノエル",
    name_en: "Shirogane Noel",
    image:
      "https://hololive.hololivepro.com/wp-content/uploads/2023/01/Shirogane-Noel_thumb.png",
    href: "https://hololive.hololivepro.com/talents/shirogane-noel/",
    group: ["3期生"],
  },
  {
    name_jp: "宝鐘マリン",
    name_en: "Houshou Marine",
    image:
      "https://hololive.hololivepro.com/wp-content/uploads/2021/05/houshou_marine_thumb.png",
    href: "https://hololive.hololivepro.com/talents/houshou-marine/",
    group: ["3期生"],
  },
  {
    name_jp: "天音かなた",
    name_en: "Amane Kanata",
    image:
      "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Amane-Kanata_list_thumb.png",
    href: "https://hololive.hololivepro.com/talents/amane-kanata/",
    group: ["4期生"],
  },
  {
    name_jp: "角巻わため",
    name_en: "Tsunomaki Watame",
    image:
      "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Tsunomaki-Watame_list_thumb-1.png",
    href: "https://hololive.hololivepro.com/talents/tsunomaki-watame/",
    group: ["4期生"],
  },
  {
    name_jp: "常闇トワ",
    name_en: "Tokoyami Towa",
    image:
      "https://hololive.hololivepro.com/wp-content/uploads/2020/06/Tokoyami-Towa_list_thumb.png",
    href: "https://hololive.hololivepro.com/talents/tokoyami-towa/",
    group: ["4期生"],
  },
  {
    name_jp: "姫森ルーナ",
    name_en: "Himemori Luna",
    image:
      "https://hololive.hololivepro.com/wp-content/uploads/2020/06/Himemori-Luna_list_thumb.png",
    href: "https://hololive.hololivepro.com/talents/himemori-luna/",
    group: ["4期生"],
  },
  {
    name_jp: "雪花ラミィ",
    name_en: "Yukihana Lamy",
    image:
      "https://hololive.hololivepro.com/wp-content/uploads/2020/06/Yukihana-Lamy_list_thumb.png",
    href: "https://hololive.hololivepro.com/talents/yukihana-lamy/",
    group: ["5期生"],
  },
  {
    name_jp: "桃鈴ねね",
    name_en: "Momosuzu Nene",
    image:
      "https://hololive.hololivepro.com/wp-content/uploads/2020/06/Momosuzu-Nene_list_thumb.png",
    href: "https://hololive.hololivepro.com/talents/momosuzu-nene/",
    group: ["5期生"],
  },
  {
    name_jp: "獅白ぼたん",
    name_en: "Shishiro Botan",
    image:
      "https://hololive.hololivepro.com/wp-content/uploads/2020/07/Shishiro-Botan_list_thumb.png",
    href: "https://hololive.hololivepro.com/talents/shishiro-botan/",
    group: ["5期生"],
  },
  {
    name_jp: "尾丸ポルカ",
    name_en: "Omaru Polka",
    image:
      "https://hololive.hololivepro.com/wp-content/uploads/2023/04/Omaru-Polka_list_thumb.png",
    href: "https://hololive.hololivepro.com/talents/omaru-polka/",
    group: ["5期生"],
  },
  {
    name_jp: "ラプラス・ダークネス",
    name_en: "La+ Darknesss",
    image:
      "https://hololive.hololivepro.com/wp-content/uploads/2020/07/La-Darknesss_list_thumb.png",
    href: "https://hololive.hololivepro.com/talents/la-darknesss/",
    group: ["秘密結社holoX"],
  },
  {
    name_jp: "鷹嶺ルイ",
    name_en: "Takane Lui",
    image:
      "https://hololive.hololivepro.com/wp-content/uploads/2020/07/Takane-Lui_list_thumb.png",
    href: "https://hololive.hololivepro.com/talents/takane-lui/",
    group: ["秘密結社holoX"],
  },
  {
    name_jp: "博衣こより",
    name_en: "Hakui Koyori",
    image:
      "https://hololive.hololivepro.com/wp-content/uploads/2020/07/Hakui-Koyori_list_thumb.png",
    href: "https://hololive.hololivepro.com/talents/hakui-koyori/",
    group: ["秘密結社holoX"],
  },
  {
    name_jp: "沙花叉クロヱ",
    name_en: "Sakamata Chloe",
    image:
      "https://hololive.hololivepro.com/wp-content/uploads/2020/07/Sakamata-Chloe_list_thumb.png",
    href: "https://hololive.hololivepro.com/talents/sakamata-chloe/",
    group: ["秘密結社holoX"],
  },
  {
    name_jp: "風真いろは",
    name_en: "Kazama Iroha",
    image:
      "https://hololive.hololivepro.com/wp-content/uploads/2020/07/Kazama-Iroha_list_thumb.png",
    href: "https://hololive.hololivepro.com/talents/kazama-iroha/",
    group: ["秘密結社holoX"],
  },
];

const groups = [
  "ALL",
  "0期生",
  "1期生",
  "2期生",
  "ホロライブゲーマーズ",
  "3期生",
  "4期生",
  "5期生",
  "秘密結社holoX",
];

function shuffleArray(arr: number[]) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
function generateShuffledArray(n: number) {
  const array = [];
  for (let i = 1; i <= n; i++) {
    array.push(i);
  }
  shuffleArray(array);
  return array;
}
const order = generateShuffledArray(Holoman.length);

const layoutAnimationDemo = () => {
  const [selectedGroup, setSelectedGroup] = useState("ALL");

  const handleTagClick = ({ group }: { group: string }) => {
    setSelectedGroup(group);
  };

  return (
    <div className="p-5 lg:p-10 max-w-[1920px] mx-auto">
      <div className="flex flex-wrap gap-2 mb-5 lg:mb-10">
        {groups.map((group) => (
          <button
            className={`px-3 py-1 bg-gray-100 rounded-full text-sm ${
              selectedGroup === group ? "bg-gray-900 text-white" : ""
            }`}
            key={group}
            onClick={() => handleTagClick({ group })}
          >
            {group}
          </button>
        ))}
      </div>
      <ul className="grid grid-cols-3 grid-flow-dense md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-[3vw] sm:gap-5">
        <AnimatePresence initial={false}>
          {Holoman.map((item, id) => {
            if (selectedGroup == "ALL" || item.group.includes(selectedGroup)) {
              return (
                <motion.li
                  layout
                  key={item.name_jp}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    opacity: { duration: 0.2, ease: "linear" },
                    layout: { type: "spring", stiffness: 700, damping: 35 },
                  }}
                  style={{
                    order: order[id],
                  }}
                >
                  <Link href={item.href} className="block">
                    <div className="aspect-square relative">
                      <Images
                        src={item.image}
                        alt={item.name_jp}
                        sizes="300px"
                        fill
                      />
                    </div>
                    <ul className="text-xs sm:text-base text-center mt-2 truncate sm:leading-tight">
                      <li>{item.name_jp}</li>
                      <li className="text-[.75em] font-semibold">
                        {item.name_en && item.name_en}
                      </li>
                    </ul>
                  </Link>
                </motion.li>
              );
            }
          })}
        </AnimatePresence>
      </ul>
    </div>
  );
};
export default layoutAnimationDemo;
