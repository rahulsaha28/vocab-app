import * as XLSX from "xlsx";

export const convertXLSXtoJSON = (file) => {
  const data = new Uint8Array(file.data);
  const x = XLSX.read(data, { type: "array" });
  const jsonData = XLSX.utils.sheet_to_json(x.Sheets[x.SheetNames[0]]);

  return jsonData;
};
