import { create } from "zustand";
import { NoticeViewType } from "@/template/notice";
import { persist } from "zustand/middleware";
interface NoticeState extends NoticeViewType {
  contents: string;
  timeStamp: Date;
  title: string;
  viewCount: number;
  setNoticeState: (notice: NoticeViewType) => void;
}

const useNoticeStore = create<any>(
  persist(
    (set) => ({
      contents: "",
      timeStamp: new Date(),
      title: "",
      viewCount: 0,

      setNoticeState: (notice: NoticeViewType) =>
        set({
          contents: notice.contents,
          timeStamp: notice.timeStamp,
          title: notice.title,
          viewCount: notice.viewCount,
        }),
    }),
    { name: "notice-storage" },
  ),
);

export default useNoticeStore;
