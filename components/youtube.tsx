import type { NextPage } from "next";
import { memo, useMemo, type CSSProperties } from "react";
import styles from "./youtube.module.css";

export type YoutubeType = {
  className?: string;

  /** Style props */
  youtubePosition?: CSSProperties["position"];
  youtubeMargin?: CSSProperties["margin"];
  youtubeTop?: CSSProperties["top"];
  youtubeRight?: CSSProperties["right"];
  youtubeBottom?: CSSProperties["bottom"];
};

const Youtube: NextPage<YoutubeType> = memo(
  ({
    className = "",
    youtubePosition,
    youtubeMargin,
    youtubeTop,
    youtubeRight,
    youtubeBottom,
  }) => {
    const youtubeStyle: CSSProperties = useMemo(() => {
      return {
        position: youtubePosition,
        margin: youtubeMargin,
        top: youtubeTop,
        right: youtubeRight,
        bottom: youtubeBottom,
      };
    }, [
      youtubePosition,
      youtubeMargin,
      youtubeTop,
      youtubeRight,
      youtubeBottom,
    ]);

    return (
      <div
        className={[styles.youtube, className].join(" ")}
        style={youtubeStyle}
      >
        <div className={styles.youtubeChild} />
        <img className={styles.yputubeIcon} alt="" src="/yputube-1.svg" />
      </div>
    );
  }
);

export default Youtube;
