// 이 파일은 단순히 스크롤바를 숨기는 스타일 적용을 위한 컴포넌트 입니다.
// resizable_panel의 성능 최적화를 위해 분리했습니다.

'use client';

import React from 'react';

const HiddenScrollbar: React.FC = () => {
  return (
    <style jsx global>{`
      /* 웹킷 기반 브라우저(Chrome, Safari 등)용 스크롤바 숨김 */
      ::-webkit-scrollbar {
        display: none;
      }

      /* Firefox 용 스크롤바 숨김 */
      * {
        scrollbar-width: none;
      }

      /* IE, Edge 용 스크롤바 숨김 */
      * {
        -ms-overflow-style: none;
      }
    `}</style>
  );
};

export default HiddenScrollbar;