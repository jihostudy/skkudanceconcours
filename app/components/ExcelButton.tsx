'use client';
import { downloadExcel } from "@/lib/functions/excel";
import { Reception } from "@/template/reception";
import { Button } from "@nextui-org/react";
import { ReactNode } from "react";

type ExcelButtonProps = {
    receptions: Reception[];
}

const ExcelButton = ({ receptions }:ExcelButtonProps):ReactNode => {

    const onDownload = () => {
        downloadExcel(receptions);
    }

    return <Button
    className=""
      onClick={onDownload}
      color="primary"
      >엑셀 다운로드</Button>
}

export default ExcelButton;