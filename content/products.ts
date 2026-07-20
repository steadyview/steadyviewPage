export type LocalizedText = { ko: string; en: string; zh: string };
export type ProductId = "2d-vision" | "3d-vision" | "xray";

export type ProductFeature = { title: LocalizedText; body: LocalizedText };
export type GalleryImage = { src: string; alt: LocalizedText };

export type ProductData = {
  id: ProductId;
  heroImage: string;
  overview: LocalizedText;
  features: ProductFeature[];
  applications: LocalizedText[];
  gallery: GalleryImage[];
};

/**
 * 제품 상세 데이터 (PRD §4.3, §8.3 — content/에서 JSON/TS로 관리).
 * 이미지는 대표값 예시이며, 고객 확정 자료로 교체 필요(PRD §10).
 */
export const products: Record<ProductId, ProductData> = {
  "2d-vision": {
    id: "2d-vision",
    heroImage: "/images/hero/hero-2d-vision.jpg",
    overview: {
      ko: "2D 머신비전 검사 시스템은 고해상도 카메라와 자체 영상처리 알고리즘으로 2차전지·전자부품 표면의 미세 결함을 고속으로 검출합니다.",
      en: "The 2D machine vision inspection system uses high-resolution cameras and proprietary image-processing algorithms to detect micro surface defects on batteries and electronic components at high speed.",
      zh: "2D 机器视觉检测系统采用高分辨率相机与自主图像处理算法，高速检测二次电池及电子零部件表面的微小缺陷。",
    },
    features: [
      {
        title: { ko: "고속 라인 스캔", en: "High-speed Line Scan", zh: "高速线扫描" },
        body: {
          ko: "생산 라인 속도에 맞춘 고속 스캔으로 검사 사이클 타임을 최소화합니다.",
          en: "High-speed scanning matched to line speed minimizes inspection cycle time.",
          zh: "与产线速度匹配的高速扫描，最大限度缩短检测节拍。",
        },
      },
      {
        title: { ko: "미세 결함 검출", en: "Micro Defect Detection", zh: "微小缺陷检测" },
        body: {
          ko: "스크래치·이물·각인 불량 등 육안으로 판별하기 어려운 결함까지 검출합니다.",
          en: "Detects scratches, foreign matter, and marking defects that are difficult to catch with the naked eye.",
          zh: "可检测划痕、异物、标记不良等肉眼难以分辨的缺陷。",
        },
      },
      {
        title: { ko: "쉬운 레시피 관리", en: "Easy Recipe Management", zh: "便捷配方管理" },
        body: {
          ko: "제품 모델별 검사 기준을 저장·전환하여 다품종 라인에 유연하게 대응합니다.",
          en: "Save and switch inspection criteria by product model for flexible multi-model lines.",
          zh: "按产品型号保存并切换检测标准，灵活应对多品种产线。",
        },
      },
      {
        title: { ko: "실시간 데이터 로깅", en: "Real-time Data Logging", zh: "实时数据记录" },
        body: {
          ko: "검사 결과와 불량 이미지를 실시간으로 기록해 품질 추적을 지원합니다.",
          en: "Logs inspection results and defect images in real time to support quality traceability.",
          zh: "实时记录检测结果与不良图像，支持品质追溯。",
        },
      },
    ],
    applications: [
      { ko: "2차전지 캡·전극 표면 검사", en: "Battery cap & electrode surface inspection", zh: "二次电池端盖与电极表面检测" },
      { ko: "전자부품 외관·각인 검사", en: "Electronic component appearance & marking inspection", zh: "电子零部件外观与标记检测" },
      { ko: "커넥터·볼트 조립 상태 검사", en: "Connector & bolt assembly inspection", zh: "连接器与螺栓装配状态检测" },
      { ko: "라벨·문자(OCR) 판독", en: "Label & character (OCR) recognition", zh: "标签与字符（OCR）识别" },
    ],
    gallery: [
      { src: "/images/products/2d-vision/gallery-1.png", alt: { ko: "2차전지 캡 검사 이미지", en: "Battery cap inspection", zh: "电池端盖检测图像" } },
      { src: "/images/products/2d-vision/gallery-2.png", alt: { ko: "캡업 검사 이미지", en: "Cap-up inspection image", zh: "端盖检测图像" } },
      { src: "/images/products/2d-vision/gallery-3.png", alt: { ko: "문자 인식(OCR) 검사", en: "Character recognition (OCR) inspection", zh: "字符识别（OCR）检测" } },
      { src: "/images/products/2d-vision/gallery-4.png", alt: { ko: "OCR 검사 결과 화면", en: "OCR inspection result screen", zh: "OCR 检测结果画面" } },
      { src: "/images/products/2d-vision/gallery-5.png", alt: { ko: "캡업 외관 검사기", en: "Cap-up surface inspection unit", zh: "端盖外观检测设备" } },
      { src: "/images/products/2d-vision/gallery-6.png", alt: { ko: "볼트 외관 검사", en: "Bolt appearance inspection", zh: "螺栓外观检测" } },
      { src: "/images/products/2d-vision/gallery-7.png", alt: { ko: "볼트 나사부 검사", en: "Bolt thread inspection", zh: "螺栓螺纹检测" } },
    ],
  },
  "3d-vision": {
    id: "3d-vision",
    heroImage: "/images/hero/hero-3d-scan-v2.png",
    overview: {
      ko: "3D 머신비전 검사 시스템은 고정밀 3D 형상 측정 기술로 반도체 범프·외관의 미세한 높이·형상 결함까지 정확하게 검출합니다.",
      en: "The 3D machine vision inspection system uses high-precision 3D shape measurement to accurately detect subtle height and shape defects on semiconductor bumps and surfaces.",
      zh: "3D 机器视觉检测系统采用高精度 3D 形貌测量技术，精准检测半导体凸点与外观的微小高度及形状缺陷。",
    },
    features: [
      {
        title: { ko: "고정밀 형상 측정", en: "High-precision Shape Measurement", zh: "高精度形貌测量" },
        body: {
          ko: "서브 마이크론 수준의 높이 분해능으로 범프 코플래너리티를 정밀 측정합니다.",
          en: "Sub-micron height resolution precisely measures bump coplanarity.",
          zh: "亚微米级高度分辨率，精确测量凸点共面度。",
        },
      },
      {
        title: { ko: "3D 프로파일 시각화", en: "3D Profile Visualization", zh: "3D 轮廓可视化" },
        body: {
          ko: "측정 결과를 3D 프로파일로 시각화하여 결함 판정 근거를 명확히 제공합니다.",
          en: "Visualizes measurement results as 3D profiles for clear defect judgment evidence.",
          zh: "将测量结果以 3D 轮廓可视化，提供清晰的缺陷判定依据。",
        },
      },
      {
        title: { ko: "다양한 패키지 대응", en: "Broad Package Compatibility", zh: "兼容多种封装" },
        body: {
          ko: "WLP·FC·BGA 등 다양한 반도체 패키지 형태에 유연하게 대응합니다.",
          en: "Flexibly supports various semiconductor package types including WLP, FC, and BGA.",
          zh: "灵活支持 WLP、FC、BGA 等多种半导体封装形式。",
        },
      },
      {
        title: { ko: "자동 결함 분류", en: "Automatic Defect Classification", zh: "自动缺陷分类" },
        body: {
          ko: "결함 유형을 자동으로 분류해 원인 분석과 수율 개선을 지원합니다.",
          en: "Automatically classifies defect types to support root-cause analysis and yield improvement.",
          zh: "自动分类缺陷类型，支持原因分析与良率提升。",
        },
      },
    ],
    applications: [
      { ko: "반도체 범프 코플래너리티 검사", en: "Semiconductor bump coplanarity inspection", zh: "半导体凸点共面度检测" },
      { ko: "패키지 외관 형상 검사", en: "Package surface shape inspection", zh: "封装外观形貌检测" },
      { ko: "본딩 와이어 루프 높이 측정", en: "Bonding wire loop height measurement", zh: "键合线弧高测量" },
      { ko: "PCB 솔더 페이스트 형상 검사", en: "PCB solder paste shape inspection", zh: "PCB 焊膏形貌检测" },
    ],
    gallery: [
      { src: "/images/products/3d-vision/gallery-1.png", alt: { ko: "3D 형상 측정 결과", en: "3D shape measurement result", zh: "3D 形貌测量结果" } },
      { src: "/images/products/3d-vision/gallery-2.png", alt: { ko: "3D 프로파일 시각화", en: "3D profile visualization", zh: "3D 轮廓可视化" } },
      { src: "/images/products/3d-vision/gallery-3.png", alt: { ko: "범프 검사 장비", en: "Bump inspection equipment", zh: "凸点检测设备" } },
      { src: "/images/products/3d-vision/gallery-4.png", alt: { ko: "스트립 단위 검사", en: "Strip-level inspection", zh: "条带级检测" } },
      { src: "/images/products/3d-vision/gallery-5.png", alt: { ko: "반도체 3D 검사", en: "Semiconductor 3D inspection", zh: "半导体 3D 检测" } },
      { src: "/images/products/3d-vision/gallery-6.png", alt: { ko: "반도체 외관 3D 검사", en: "Semiconductor 3D surface inspection", zh: "半导体外观 3D 检测" } },
    ],
  },
  xray: {
    id: "xray",
    heroImage: "/images/hero/hero-xray-ct-v2.png",
    overview: {
      ko: "산업용 X-ray 검사장비는 비파괴 방식으로 제품 내부 구조를 투시하여, 2차전지·반도체 내부의 결함과 이물질을 안전하게 검출합니다.",
      en: "Industrial X-ray inspection equipment non-destructively images internal structures to safely detect defects and foreign material inside batteries and semiconductors.",
      zh: "工业 X 射线检测设备以非破坏方式透视产品内部结构，安全检测二次电池与半导体内部的缺陷及异物。",
    },
    features: [
      {
        title: { ko: "고해상도 X-ray CT", en: "High-resolution X-ray CT", zh: "高分辨率 X 射线 CT" },
        body: {
          ko: "미세 초점 X-ray 튜브로 내부 구조를 고해상도 단층 영상으로 재구성합니다.",
          en: "A micro-focus X-ray tube reconstructs internal structures into high-resolution cross-sectional images.",
          zh: "微焦点 X 射线管将内部结构重建为高分辨率断层图像。",
        },
      },
      {
        title: { ko: "비파괴 내부 검사", en: "Non-destructive Internal Inspection", zh: "无损内部检测" },
        body: {
          ko: "제품을 분해하지 않고 내부 결함·이물질·정렬 상태를 확인합니다.",
          en: "Verifies internal defects, foreign material, and alignment without disassembling the product.",
          zh: "无需拆解产品即可确认内部缺陷、异物及对位状态。",
        },
      },
      {
        title: { ko: "자동 결함 판정(AI)", en: "AI-based Automatic Defect Judgment", zh: "AI 自动缺陷判定" },
        body: {
          ko: "딥러닝 기반 판정 알고리즘으로 검사자 숙련도에 무관하게 일관된 결과를 제공합니다.",
          en: "Deep-learning-based judgment delivers consistent results regardless of operator experience.",
          zh: "基于深度学习的判定算法，无论操作人员熟练度如何均可提供一致结果。",
        },
      },
      {
        title: { ko: "안전 차폐 설계", en: "Safety-shielded Design", zh: "安全屏蔽设计" },
        body: {
          ko: "방사선 안전기준을 충족하는 차폐 구조로 작업자 안전을 확보합니다.",
          en: "A shielding structure that meets radiation safety standards protects operators.",
          zh: "符合辐射安全标准的屏蔽结构，保障操作人员安全。",
        },
      },
    ],
    applications: [
      { ko: "2차전지 내부 결함·이물 검사", en: "Battery internal defect & foreign material inspection", zh: "二次电池内部缺陷与异物检测" },
      { ko: "반도체 패키지 내부 정렬 검사", en: "Semiconductor package internal alignment inspection", zh: "半导体封装内部对位检测" },
      { ko: "용접부·주조품 결함 검사", en: "Weld & casting defect inspection", zh: "焊接部位与铸件缺陷检测" },
      { ko: "타이어·고무 제품 내부 구조 검사", en: "Tire & rubber product internal structure inspection", zh: "轮胎与橡胶制品内部结构检测" },
      { ko: "식품·소비재 내 이물질 검사", en: "Food & consumer product foreign material inspection", zh: "食品与消费品异物检测" },
    ],
    gallery: [
      { src: "/images/products/xray/gallery-1.png", alt: { ko: "2차전지 X-ray CT 검사", en: "Battery X-ray CT inspection", zh: "电池 X 射线 CT 检测" } },
      { src: "/images/products/xray/gallery-2.png", alt: { ko: "2차전지 X-ray 투과 이미지", en: "Battery X-ray transmission image", zh: "电池 X 射线透射图像" } },
      { src: "/images/products/xray/gallery-3.png", alt: { ko: "2차전지 내부 결함 검사", en: "Battery internal defect inspection", zh: "电池内部缺陷检测" } },
      { src: "/images/products/xray/gallery-4.png", alt: { ko: "타이어 내부 CT 검사 1", en: "Tire internal CT inspection 1", zh: "轮胎内部 CT 检测 1" } },
      { src: "/images/products/xray/gallery-5.png", alt: { ko: "타이어 내부 CT 검사 2", en: "Tire internal CT inspection 2", zh: "轮胎内部 CT 检测 2" } },
      { src: "/images/products/xray/gallery-6.png", alt: { ko: "타이어 내부 CT 검사 3", en: "Tire internal CT inspection 3", zh: "轮胎内部 CT 检测 3" } },
      { src: "/images/products/xray/gallery-7.png", alt: { ko: "타이어 내부 CT 검사 4", en: "Tire internal CT inspection 4", zh: "轮胎内部 CT 检测 4" } },
      { src: "/images/products/xray/gallery-8.png", alt: { ko: "타이어 내부 CT 검사 5", en: "Tire internal CT inspection 5", zh: "轮胎内部 CT 检测 5" } },
      { src: "/images/products/xray/gallery-9.png", alt: { ko: "유리기판 X-ray 검사 1", en: "Glass substrate X-ray inspection 1", zh: "玻璃基板 X 射线检测 1" } },
      { src: "/images/products/xray/gallery-10.png", alt: { ko: "유리기판 X-ray 검사 2", en: "Glass substrate X-ray inspection 2", zh: "玻璃基板 X 射线检测 2" } },
      { src: "/images/products/xray/gallery-11.png", alt: { ko: "유리기판 X-ray 검사 3", en: "Glass substrate X-ray inspection 3", zh: "玻璃基板 X 射线检测 3" } },
      { src: "/images/products/xray/gallery-12.png", alt: { ko: "렌즈 모듈 X-ray 검사", en: "Lens module X-ray inspection", zh: "镜头模组 X 射线检测" } },
      { src: "/images/products/xray/gallery-13.png", alt: { ko: "릴 카운터 X-ray 검사", en: "Reel counter X-ray inspection", zh: "卷带计数器 X 射线检测" } },
      { src: "/images/products/xray/gallery-14.jpg", alt: { ko: "반도체 리드프레임 X-ray 검사", en: "Semiconductor lead frame X-ray inspection", zh: "半导体引线框架 X 射线检测" } },
      { src: "/images/products/xray/gallery-15.png", alt: { ko: "자동차 부품 X-ray 검사", en: "Automotive part X-ray inspection", zh: "汽车零部件 X 射线检测" } },
      { src: "/images/products/xray/gallery-16.png", alt: { ko: "식품 X-ray 검사 (초코파이)", en: "Food X-ray inspection (choco pie)", zh: "食品 X 射线检测（巧克力派）" } },
      { src: "/images/products/xray/gallery-17.png", alt: { ko: "식품 X-ray 단면 검사", en: "Food X-ray cross-section inspection", zh: "食品 X 射线断层检测" } },
      { src: "/images/products/xray/gallery-18.png", alt: { ko: "식품 X-ray 검사 (초코볼)", en: "Food X-ray inspection (chocolate balls)", zh: "食品 X 射线检测（巧克力球）" } },
      { src: "/images/products/xray/gallery-19.png", alt: { ko: "접착제 용기 X-ray 검사", en: "Adhesive container X-ray inspection", zh: "胶粘剂容器 X 射线检测" } },
    ],
  },
};
