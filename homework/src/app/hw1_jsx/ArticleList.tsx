'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import { Article } from './data/api';
import Image from 'next/image';

import commentIcon from './assets/message-square.svg';
import goodIcon from './assets/thumbs-up.svg';
import badIcon from './assets/thumbs-down.svg';

// Note : 게시글 정보 가운데 점은 '·' 을 복붙해서 사용하세요. 특수문자 입니다.

type ArticleListProps = {
    showRank: boolean;
    showBoard: boolean;
    showWriter: boolean;
    showHit: boolean;
    showTimeAgo: boolean;
    data: Article[];
}


const ArticleList = ({
    showRank = false,
    showBoard = false,
    showWriter = false,
    showHit = false,
    showTimeAgo = false,
    data = []
}: ArticleListProps) => {

    const [articles, setArticles] = useState<Article[]>([]);
    useEffect(() => {
        setArticles(data);
    });

    return (
        <div className="flex flex-col justify-center items-center w-[600px] border border-gray-300">
            {/* Implement Here */}
        </div>
    );
}

export default ArticleList;