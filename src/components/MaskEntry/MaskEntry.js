"use client";
import React from "react";
import { motion, AnimatePresence } from "motion/react";

const variants = {
  container: {
    initial: {
      backgroundColor: "#FFFDF4",
    },
    animate: {
      backgroundColor: "#E7582E",
      transition: {
        delay: 0.8,
        duration: 2,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  },
  square: {
    initial: {
      scale: 0,
      rotate: 0,
      backgroundColor: "#E7582E",
    },
    animate: {
      scale: 1,
      rotate: [45, 0, -45],
      backgroundColor: "#FFFDF4",
      transition: {
        duration: 2,
      },
    },
    exit: {
      scale: 0,
      rotate: 45,
    },
  },
  square2: {
    initial: {
      scale: 0,
      rotate: 0,
      backgroundColor: "#E7582E",
    },
    animate: {
      scale: 1,
      rotate: [45, 0, -45],
      backgroundColor: "#FFFDF4",
      transition: {
        duration: 1,
        delay: 3,
      },
    },
    exit: {
      scale: 0,
      rotate: 45,
    },
  },
  square3: {
    initial: {
      scale: 0,
      rotate: 0,
      backgroundColor: "#E7582E",
    },
    animate: {
      scale: 1,
      rotate: [45, 0, -45],
      backgroundColor: "#FFFDF4",
      transition: {
        duration: 1,
        delay: 3.5,
      },
    },
    exit: {
      scale: 0,
      rotate: 45,
    },
  },
  text: {
    initial: {
      y: -100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 1.5, // Commence après la première animation
      },
    },
    exit: {
      y: -100,
      opacity: 0,
    },
  },
  text2: {
    initial: {
      y: 100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 2.5, // Commence après la première animation
      },
    },
    exit: {
      y: 100,
      opacity: 0,
    },
  },
};

export default function StepSequence() {
  return (
    <motion.div
      data-lenis-prevent
      variants={variants.container}
      initial="initial"
      animate="animate"
      className="h-screen w-screen fixed top-0 left-0 right-0 z-10 flex justify-center place-items-center no-doc-scroll overflow-hidden scrollbar-hidden"
    >
      <AnimatePresence>
        <div
          key="squares-container"
          className="absolute bottom-0 top-0 md:top-64 flex items-center justify-center"
        >
          <div className="relative">
            {/* Carré central */}
            <motion.div
              variants={variants.square}
              initial="initial"
              animate="animate"
              exit="exit"
              className="bg-orange-500 size-48 rounded-3xl"
            />

            {/* Carré droit */}
            <motion.div
              variants={variants.square2}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute bg-base-softWhite size-48 rounded-3xl md:block hidden"
              style={{
                top: "-100%",
                right: "-100%",
              }}
            />

            {/* Carré gauche */}
            <motion.div
              variants={variants.square3}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute bg-base-softWhite size-48 rounded-3xl md:block hidden"
              style={{
                top: "-100%",
                left: "-100%",
              }}
            />
          </div>
        </div>

        <motion.div
          key="noe-text"
          variants={variants.text}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute top-0 left-0 w-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 196"
            className="size-full"
            fill="none"
          >
            <path
              d="M98.8201 192L29.73 86.7895V192H0.540039V41.2195H34.98L100.71 141.18V41.2195H130.11V192H98.8201Z"
              fill="#FFFDF4"
            />
            <path
              d="M225.166 195.15C214.246 195.15 204.096 193.19 194.716 189.27C185.476 185.35 177.356 179.89 170.356 172.89C163.356 165.75 157.896 157.42 153.976 147.9C150.056 138.24 148.096 127.74 148.096 116.4C148.096 105.06 150.056 94.6295 153.976 85.1095C157.896 75.5895 163.356 67.3295 170.356 60.3295C177.356 53.3295 185.476 47.8695 194.716 43.9495C204.096 40.0295 214.246 38.0695 225.166 38.0695C236.086 38.0695 246.236 40.0295 255.616 43.9495C264.996 47.8695 273.186 53.3295 280.186 60.3295C287.326 67.3295 292.856 75.5895 296.776 85.1095C300.696 94.6295 302.656 105.06 302.656 116.4C302.656 127.74 300.696 138.24 296.776 147.9C292.856 157.42 287.326 165.75 280.186 172.89C273.186 179.89 264.996 185.35 255.616 189.27C246.236 193.19 236.086 195.15 225.166 195.15ZM225.166 166.59C232.026 166.59 238.186 165.33 243.646 162.81C249.246 160.15 253.936 156.51 257.716 151.89C261.636 147.27 264.576 141.95 266.536 135.93C268.636 129.77 269.686 123.26 269.686 116.4C269.686 109.54 268.636 103.1 266.536 97.0795C264.576 91.0595 261.636 85.8095 257.716 81.3295C253.936 76.7095 249.246 73.1395 243.646 70.6195C238.186 67.9595 232.026 66.6295 225.166 66.6295C218.306 66.6295 212.146 67.9595 206.686 70.6195C201.226 73.1395 196.536 76.7095 192.616 81.3295C188.836 85.8095 185.896 91.0595 183.796 97.0795C181.836 103.1 180.856 109.54 180.856 116.4C180.856 123.26 181.836 129.77 183.796 135.93C185.896 141.95 188.836 147.27 192.616 151.89C196.536 156.51 201.226 160.15 206.686 162.81C212.146 165.33 218.306 166.59 225.166 166.59Z"
              fill="#FFFDF4"
            />
            <path
              d="M421.9 164.28V192H320.47V41.2195H420.43V68.9395H352.39V100.65H414.13V128.16H352.39V164.28H421.9ZM386.83 32.3995H356.38L377.38 0.269531H411.19L386.83 32.3995Z"
              fill="#FFFDF4"
            />
            <path
              d="M597.79 145.17C597.79 154.69 595.34 163.16 590.44 170.58C585.54 177.86 578.54 183.6 569.44 187.8C560.48 192 549.63 194.1 536.89 194.1C524.29 194.1 513.3 192 503.92 187.8C494.68 183.46 487.4 177.37 482.08 169.53C476.76 161.69 473.68 152.45 472.84 141.81H505.18C505.6 150.21 508.4 156.86 513.58 161.76C518.9 166.66 526.46 169.11 536.26 169.11C541.72 169.11 546.48 168.34 550.54 166.8C554.74 165.26 558.03 163.02 560.41 160.08C562.79 157.14 563.98 153.71 563.98 149.79C563.98 145.03 562.23 141.25 558.73 138.45C555.23 135.51 550.26 133.41 543.82 132.15L519.04 127.32C513.3 126.34 507.98 124.73 503.08 122.49C498.18 120.25 493.91 117.45 490.27 114.09C486.63 110.73 483.76 106.67 481.66 101.91C479.56 97.1495 478.51 91.6895 478.51 85.5295C478.51 76.5695 480.89 68.5895 485.65 61.5895C490.55 54.5895 497.2 49.1295 505.6 45.2095C514.14 41.2895 523.87 39.3295 534.79 39.3295C546.13 39.3295 556.21 41.4295 565.03 45.6295C573.85 49.8295 580.99 55.7795 586.45 63.4795C591.91 71.0395 594.92 80.0695 595.48 90.5695H563.14C562.86 85.2495 561.46 80.6295 558.94 76.7095C556.56 72.6495 553.34 69.5695 549.28 67.4695C545.22 65.2295 540.53 64.1095 535.21 64.1095C530.03 64.1095 525.62 65.0195 521.98 66.8395C518.48 68.5195 515.75 70.8295 513.79 73.7695C511.83 76.5695 510.85 79.7895 510.85 83.4295C510.85 86.7895 511.76 89.5895 513.58 91.8295C515.54 94.0695 518.06 95.8895 521.14 97.2895C524.22 98.5495 527.58 99.5295 531.22 100.23L557.05 105.48C570.35 108.14 580.43 112.69 587.29 119.13C594.29 125.43 597.79 134.11 597.79 145.17Z"
              fill="#FFFDF4"
            />
            <path
              d="M679.806 195.15C669.306 195.15 659.436 193.19 650.196 189.27C640.956 185.21 632.906 179.61 626.046 172.47C619.186 165.19 613.796 156.79 609.876 147.27C606.096 137.75 604.206 127.46 604.206 116.4C604.206 105.34 606.096 95.1195 609.876 85.7395C613.796 76.2195 619.186 67.8895 626.046 60.7495C632.906 53.6095 640.956 48.0795 650.196 44.1595C659.436 40.0995 669.306 38.0695 679.806 38.0695C693.106 38.0695 705.146 40.7995 715.926 46.2595C726.846 51.7195 735.806 59.3495 742.806 69.1495C749.806 78.9495 754.146 90.2895 755.826 103.17H722.016C720.896 95.8895 718.306 89.5195 714.246 84.0595C710.326 78.5995 705.426 74.3295 699.546 71.2495C693.806 68.1695 687.366 66.6295 680.226 66.6295C673.646 66.6295 667.696 67.8195 662.376 70.1995C657.196 72.5795 652.646 76.0095 648.726 80.4895C644.946 84.9695 642.006 90.2895 639.906 96.4495C637.946 102.47 636.966 109.12 636.966 116.4C636.966 123.82 637.946 130.61 639.906 136.77C642.006 142.79 644.946 148.04 648.726 152.52C652.646 157 657.196 160.5 662.376 163.02C667.696 165.4 673.646 166.59 680.226 166.59C687.366 166.59 693.876 165.05 699.756 161.97C705.636 158.75 710.466 154.41 714.246 148.95C718.166 143.35 720.756 136.98 722.016 129.84H755.826C754.006 142.86 749.596 154.27 742.596 164.07C735.596 173.87 726.706 181.5 715.926 186.96C705.146 192.42 693.106 195.15 679.806 195.15Z"
              fill="#FFFDF4"
            />
            <path
              d="M805.834 192H773.914V41.2195H805.834V100.65H871.144V41.2195H903.064V192H871.144V128.16H805.834V192Z"
              fill="#FFFDF4"
            />
            <path
              d="M998.34 192L958.86 91.8295V192H929.88V41.2195H968.1L1011.78 152.94L1055.67 41.2195H1093.89V192H1064.91V90.9895L1025.01 192H998.34Z"
              fill="#FFFDF4"
            />
            <path d="M1152.42 192H1120.5V41.2195H1152.42V192Z" fill="#FFFDF4" />
            <path
              d="M1232.61 192H1179.06V41.2195H1232.61C1248.57 41.2195 1262.29 44.3695 1273.77 50.6695C1285.25 56.9695 1294.07 65.7195 1300.23 76.9195C1306.39 88.1195 1309.47 101.07 1309.47 115.77C1309.47 130.33 1306.32 143.42 1300.02 155.04C1293.72 166.52 1284.76 175.55 1273.14 182.13C1261.66 188.71 1248.15 192 1232.61 192ZM1210.98 68.7295V164.49H1230.93C1241.01 164.49 1249.41 162.6 1256.13 158.82C1262.99 155.04 1268.1 149.51 1271.46 142.23C1274.96 134.95 1276.71 126.13 1276.71 115.77C1276.71 105.69 1274.96 97.1495 1271.46 90.1495C1268.1 83.1495 1262.99 77.8295 1256.13 74.1895C1249.41 70.5495 1241.01 68.7295 1230.93 68.7295H1210.98Z"
              fill="#FFFDF4"
            />
            <path
              d="M1391.36 192H1359.44V69.9895H1311.98V41.2195H1439.03V69.9895H1391.36V192Z"
              fill="#FFFDF4"
            />
          </svg>
        </motion.div>

        <motion.div
          key="rapport-text"
          variants={variants.text2}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute bottom-0 left-0 w-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-full"
            viewBox="0 0 1448 116"
            fill="none"
          >
            <path
              d="M23.5778 113H0.321777V3.14558H43.3148C57.1868 3.14558 67.9478 6.25659 75.5978 12.4786C83.2478 18.5986 87.0728 27.3706 87.0728 38.7946C87.0728 46.1386 84.8798 52.6666 80.4938 58.3786C76.2098 63.9886 70.1408 68.0686 62.2868 70.6186L90.5918 113H62.8988L38.1128 74.1376H23.5778V113ZM23.5778 22.4236V55.0126H42.2438C49.2818 55.0126 54.6368 53.6866 58.3088 51.0346C61.9808 48.2806 63.8168 44.2006 63.8168 38.7946C63.8168 33.2866 61.9808 29.2066 58.3088 26.5546C54.6368 23.8006 49.2818 22.4236 42.2438 22.4236H23.5778Z"
              fill="#FFFDF4"
            />
            <path
              d="M120.991 70.9246H169.645L175.765 89.4376H114.259L120.991 70.9246ZM174.694 113L145.318 28.5436L115.33 113H91.921L133.231 3.14558H158.629L199.633 113H174.694Z"
              fill="#FFFDF4"
            />
            <path
              d="M250.501 77.1976H233.212V113H209.956V3.14558H250.501C259.477 3.14558 267.178 4.52258 273.604 7.27659C280.132 10.0306 285.13 14.1106 288.598 19.5166C292.168 24.9226 293.953 31.6546 293.953 39.7126C293.953 47.6686 292.168 54.4516 288.598 60.0616C285.13 65.6716 280.132 69.9556 273.604 72.9136C267.178 75.7696 259.477 77.1976 250.501 77.1976ZM250.348 22.7296H233.212V57.6136H250.348C256.876 57.6136 261.925 56.0326 265.495 52.8706C269.065 49.6066 270.85 45.2716 270.85 39.8656C270.85 34.4596 269.065 30.2776 265.495 27.3196C261.925 24.2596 256.876 22.7296 250.348 22.7296Z"
              fill="#FFFDF4"
            />
            <path
              d="M347.249 77.1976H329.96V113H306.704V3.14558H347.249C356.225 3.14558 363.926 4.52258 370.352 7.27659C376.88 10.0306 381.878 14.1106 385.346 19.5166C388.916 24.9226 390.701 31.6546 390.701 39.7126C390.701 47.6686 388.916 54.4516 385.346 60.0616C381.878 65.6716 376.88 69.9556 370.352 72.9136C363.926 75.7696 356.225 77.1976 347.249 77.1976ZM347.096 22.7296H329.96V57.6136H347.096C353.624 57.6136 358.673 56.0326 362.243 52.8706C365.813 49.6066 367.598 45.2716 367.598 39.8656C367.598 34.4596 365.813 30.2776 362.243 27.3196C358.673 24.2596 353.624 22.7296 347.096 22.7296Z"
              fill="#FFFDF4"
            />
            <path
              d="M453.178 115.295C445.222 115.295 437.827 113.867 430.993 111.011C424.261 108.155 418.345 104.177 413.245 99.0766C408.145 93.8746 404.167 87.8056 401.311 80.8696C398.455 73.8316 397.027 66.1816 397.027 57.9196C397.027 49.6576 398.455 42.0586 401.311 35.1226C404.167 28.1866 408.145 22.1686 413.245 17.0686C418.345 11.9686 424.261 7.99059 430.993 5.13459C437.827 2.27859 445.222 0.850586 453.178 0.850586C461.134 0.850586 468.529 2.27859 475.363 5.13459C482.197 7.99059 488.164 11.9686 493.264 17.0686C498.466 22.1686 502.495 28.1866 505.351 35.1226C508.207 42.0586 509.635 49.6576 509.635 57.9196C509.635 66.1816 508.207 73.8316 505.351 80.8696C502.495 87.8056 498.466 93.8746 493.264 99.0766C488.164 104.177 482.197 108.155 475.363 111.011C468.529 113.867 461.134 115.295 453.178 115.295ZM453.178 94.4866C458.176 94.4866 462.664 93.5686 466.642 91.7326C470.722 89.7946 474.139 87.1426 476.893 83.7766C479.749 80.4106 481.891 76.5346 483.319 72.1486C484.849 67.6606 485.614 62.9176 485.614 57.9196C485.614 52.9216 484.849 48.2296 483.319 43.8436C481.891 39.4576 479.749 35.6326 476.893 32.3686C474.139 29.0026 470.722 26.4016 466.642 24.5656C462.664 22.6276 458.176 21.6586 453.178 21.6586C448.18 21.6586 443.692 22.6276 439.714 24.5656C435.736 26.4016 432.319 29.0026 429.463 32.3686C426.709 35.6326 424.567 39.4576 423.037 43.8436C421.609 48.2296 420.895 52.9216 420.895 57.9196C420.895 62.9176 421.609 67.6606 423.037 72.1486C424.567 76.5346 426.709 80.4106 429.463 83.7766C432.319 87.1426 435.736 89.7946 439.714 91.7326C443.692 93.5686 448.18 94.4866 453.178 94.4866Z"
              fill="#FFFDF4"
            />
            <path
              d="M545.87 113H522.614V3.14558H565.607C579.479 3.14558 590.24 6.25659 597.89 12.4786C605.54 18.5986 609.365 27.3706 609.365 38.7946C609.365 46.1386 607.172 52.6666 602.786 58.3786C598.502 63.9886 592.433 68.0686 584.579 70.6186L612.884 113H585.191L560.405 74.1376H545.87V113ZM545.87 22.4236V55.0126H564.536C571.574 55.0126 576.929 53.6866 580.601 51.0346C584.273 48.2806 586.109 44.2006 586.109 38.7946C586.109 33.2866 584.273 29.2066 580.601 26.5546C576.929 23.8006 571.574 22.4236 564.536 22.4236H545.87Z"
              fill="#FFFDF4"
            />
            <path
              d="M671.613 113H648.357V24.1066H613.779V3.14558H706.344V24.1066H671.613V113Z"
              fill="#FFFDF4"
            />
            <path
              d="M785.086 113H746.071V3.14558H785.086C796.714 3.14558 806.71 5.44058 815.074 10.0306C823.438 14.6206 829.864 20.9956 834.352 29.1556C838.84 37.3156 841.084 46.7506 841.084 57.4606C841.084 68.0686 838.789 77.6056 834.199 86.0716C829.609 94.4356 823.081 101.015 814.615 105.809C806.251 110.603 796.408 113 785.086 113ZM769.327 23.1886V92.9566H783.862C791.206 92.9566 797.326 91.5796 802.222 88.8256C807.22 86.0716 810.943 82.0426 813.391 76.7386C815.941 71.4346 817.216 65.0086 817.216 57.4606C817.216 50.1166 815.941 43.8946 813.391 38.7946C810.943 33.6946 807.22 29.8186 802.222 27.1666C797.326 24.5146 791.206 23.1886 783.862 23.1886H769.327Z"
              fill="#FFFDF4"
            />
            <path
              d="M928.074 92.8036V113H854.175V3.14558H927.003V23.3416H877.431V46.4446H922.413V66.4876H877.431V92.8036H928.074Z"
              fill="#FFFDF4"
            />
            <path
              d="M1056.22 78.8806C1056.22 85.8166 1054.44 91.9876 1050.87 97.3936C1047.3 102.698 1042.2 106.88 1035.57 109.94C1029.04 113 1021.13 114.53 1011.85 114.53C1002.67 114.53 994.666 113 987.832 109.94C981.1 106.778 975.796 102.341 971.92 96.6286C968.044 90.9166 965.8 84.1846 965.188 76.4326H988.75C989.056 82.5526 991.096 87.3976 994.87 90.9676C998.746 94.5376 1004.25 96.3226 1011.39 96.3226C1015.37 96.3226 1018.84 95.7616 1021.8 94.6396C1024.86 93.5176 1027.25 91.8856 1028.99 89.7436C1030.72 87.6016 1031.59 85.1026 1031.59 82.2466C1031.59 78.7786 1030.31 76.0246 1027.76 73.9846C1025.21 71.8426 1021.59 70.3126 1016.9 69.3946L998.848 65.8756C994.666 65.1616 990.79 63.9886 987.22 62.3566C983.65 60.7246 980.539 58.6846 977.887 56.2366C975.235 53.7886 973.144 50.8306 971.614 47.3626C970.084 43.8946 969.319 39.9166 969.319 35.4286C969.319 28.9006 971.053 23.0866 974.521 17.9866C978.091 12.8866 982.936 8.90859 989.056 6.05258C995.278 3.19658 1002.37 1.76858 1010.32 1.76858C1018.58 1.76858 1025.93 3.29859 1032.35 6.35859C1038.78 9.41859 1043.98 13.7536 1047.96 19.3636C1051.94 24.8716 1054.13 31.4506 1054.54 39.1006H1030.98C1030.77 35.2246 1029.75 31.8586 1027.92 29.0026C1026.18 26.0446 1023.84 23.8006 1020.88 22.2706C1017.92 20.6386 1014.5 19.8226 1010.63 19.8226C1006.85 19.8226 1003.64 20.4856 1000.99 21.8116C998.44 23.0356 996.451 24.7186 995.023 26.8606C993.595 28.9006 992.881 31.2466 992.881 33.8986C992.881 36.3466 993.544 38.3866 994.87 40.0186C996.298 41.6506 998.134 42.9766 1000.38 43.9966C1002.62 44.9146 1005.07 45.6286 1007.72 46.1386L1026.54 49.9636C1036.23 51.9016 1043.57 55.2166 1048.57 59.9086C1053.67 64.4986 1056.22 70.8226 1056.22 78.8806Z"
              fill="#FFFDF4"
            />
            <path
              d="M1116.14 113H1092.88V24.1066H1058.3V3.14558H1150.87V24.1066H1116.14V113Z"
              fill="#FFFDF4"
            />
            <path
              d="M1172.01 70.9246H1220.66L1226.78 89.4376H1165.27L1172.01 70.9246ZM1225.71 113L1196.33 28.5436L1166.34 113H1142.94L1184.25 3.14558H1209.64L1250.65 113H1225.71Z"
              fill="#FFFDF4"
            />
            <path
              d="M1304.73 115.295C1296.77 115.295 1289.33 113.918 1282.39 111.164C1275.56 108.308 1269.54 104.33 1264.34 99.2296C1259.24 94.1296 1255.26 88.0606 1252.4 81.0226C1249.55 73.8826 1248.12 66.0796 1248.12 57.6136C1248.12 49.4536 1249.5 41.9566 1252.25 35.1226C1255 28.2886 1258.88 22.2706 1263.88 17.0686C1268.88 11.8666 1274.74 7.88859 1281.47 5.13459C1288.31 2.27859 1295.75 0.850586 1303.81 0.850586C1313.09 0.850586 1321.41 2.58458 1328.75 6.05258C1336.2 9.41859 1342.42 14.1106 1347.42 20.1286C1352.52 26.1466 1356.29 33.1846 1358.74 41.2426H1331.35C1330.23 37.4686 1328.39 34.1536 1325.84 31.2976C1323.29 28.3396 1320.13 25.9936 1316.36 24.2596C1312.58 22.5256 1308.2 21.6586 1303.2 21.6586C1297.28 21.6586 1291.93 23.0866 1287.13 25.9426C1282.44 28.6966 1278.72 32.8276 1275.97 38.3356C1273.31 43.7416 1271.99 50.3716 1271.99 58.2256C1271.99 65.2636 1273.26 71.5876 1275.81 77.1976C1278.36 82.8076 1282.14 87.2956 1287.13 90.6616C1292.23 93.9256 1298.46 95.5576 1305.8 95.5576C1311.21 95.5576 1315.9 94.5886 1319.88 92.6506C1323.96 90.6106 1327.27 87.8566 1329.82 84.3886C1332.47 80.8186 1334.31 76.7896 1335.33 72.3016H1303.51V53.7886H1360.12C1360.52 62.7646 1359.5 71.0266 1357.06 78.5746C1354.61 86.0206 1350.94 92.4976 1346.04 98.0056C1341.25 103.514 1335.33 107.798 1328.29 110.858C1321.36 113.816 1313.5 115.295 1304.73 115.295Z"
              fill="#FFFDF4"
            />
            <path
              d="M1447.16 92.8036V113H1373.26V3.14558H1446.09V23.3416H1396.51V46.4446H1441.5V66.4876H1396.51V92.8036H1447.16Z"
              fill="#FFFDF4"
            />
          </svg>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
