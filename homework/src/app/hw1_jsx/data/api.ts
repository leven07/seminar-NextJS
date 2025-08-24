export type Article = {
    rank: number; // 게시글 순위 (번호)
    title: string; // 게시글 제목
    board: string; // 게시판 이름
    writter: string // 작성자 이름
    hit: number; // 조회수
    time_ago: string; //게시글 timestamp ex) '1시간 전' '7월 21일'
    good: number; //좋아요 수
    bad: number; //싫어요 수
    comment: number; //댓글 수 
    is_read: boolean; // 읽음 여부
}

export type Article_API_Response = {
    result: Article[]; //게시글 목록
}

export const mock_article_response: Article_API_Response = {
    result: [
        {
            rank: 1,
            title: "아라 팀원 모집합니다.",
            board: "자유게시판",
            writter: "박승범",
            hit: 100,
            time_ago: "1시간 전",
            good: 10,
            bad: 2,
            comment: 5,
            is_read: false
        },
        {
            rank: 2,
            title: "와이파이가 느려요",
            board: "학교에게 전합니다",
            writter: "김경택",
            hit: 200,
            time_ago: "2시간 전",
            good: 20,
            bad: 1,
            comment: 10,
            is_read: true,
        },
        {
            rank: 3,
            title: "수강 신청 안내",
            board: "포탈 공지",
            writter: "학적팀",
            hit: 300,
            time_ago: "3일 전",
            good: 30,
            bad: 0,
            comment: 15,
            is_read: false,
        },
        {
            rank: 4,
            title: "엄청나게 긴 안건에 대한 엄청나게 긴 회의를 통해 의결된 엄청나게 긴 안건에 대한 엄청나게 긴 공지사항 입니다.",
            board: "총학",
            writter: "사나운 보노보",
            hit: 150,
            time_ago: "1일 전",
            good: 16,
            bad: 17,
            comment: 7,
            is_read: false,
        },
        {
            rank: 5,
            title: "Ara 이용 약관 변경 안내",
            board: "공지사항",
            writter: "오승빈구리",
            hit: 500,
            time_ago: "7월 25일",
            good: 45,
            bad: 1,
            comment: 20,
            is_read: true,
        }
    ]
}