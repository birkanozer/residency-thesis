import { Card } from "primereact/card";
import { Button } from "primereact/button";

import "primeflex/primeflex.css";
import "./Header.css";

const Header = () => {
  const title =
    "ERKEN BAŞLANGIÇLI BAĞIRSAK HASTALIKLARINDA PROTEİN KAYBETTİRİCİ ENTEROPATİ VE İNFLAMATUAR BAĞIRSAK HASTALIKLARININ AYIRT EDİCİ VE ORTAK ÖZELLİKLERİ";

  const handleDownload = () => {
    alert("İndirme işlemi henüz aktif değil.");
  };

  return (
    <div className='p-col-12 p-mt-5'>
      <Card title={title}>
        <p className='p-text-left'>
          Çocuk Sağlığı ve Hastalıkları Uzmanlık tezim için kullandığım
          grafiklerin etkileşimli haline buradan ulaşabilirsiniz. En iyi deneyim
          için bilgisayar ya da tablet kullanmanız önerilir. Tezimin dijital
          versiyonunu aşağıdaki bağlantıdan indirebilirsiniz.
        </p>
        <p className='p-text-center'>
          <Button label='İndir' onClick={handleDownload} />
        </p>
      </Card>
    </div>
  );
};

export default Header;
