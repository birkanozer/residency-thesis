import { Card } from "primereact/card";
import { Button } from "primereact/button";

import file from "../../assets/tez.pdf";

const Header = () => {
  const title =
    "ERKEN BAŞLANGIÇLI BAĞIRSAK HASTALIKLARINDA PROTEİN KAYBETTİRİCİ ENTEROPATİ VE İNFLAMATUAR BAĞIRSAK HASTALIKLARININ AYIRT EDİCİ VE ORTAK ÖZELLİKLERİ";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.download = "Tez";
    link.href = file;
    link.click();
  };

  return (
    <div className='col-10 col-offset-1 mt-6 text-center'>
      <Card title={title} className='shadow-5'>
        <p className='text-left'>
          Çocuk Sağlığı ve Hastalıkları Uzmanlık tezim için kullandığım
          grafiklerin etkileşimli haline buradan ulaşabilirsiniz. En iyi deneyim
          için bilgisayar ya da tablet kullanmanız önerilir. Tezimin dijital
          versiyonunu aşağıdaki bağlantıdan indirebilirsiniz.
        </p>
        <Button
          label='İndir'
          icon='pi pi-download'
          onClick={handleDownload}
          className='mt-2'
        />
      </Card>
    </div>
  );
};

export default Header;
