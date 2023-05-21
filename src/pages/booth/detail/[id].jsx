import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DeafultImage from "../../../../components/image/common/booth_deafault.png"
import { BoothDetailContent, BoothDetailCotainer, BoothDetailHeader, BoothDetailHeaderWrapper, BoothDetailLine, BoothDetailLocation, BoothDetailLoveShareWrapper, BoothDetailMenuAllSee, BoothDetailMenuHeader, BoothDetailMenuTitle, BoothDetailMenuWrapper, BoothDetailOperator, BoothDetailSeparator, BoothDetailTime, BoothDetailTitle, BoothImageSlider, BoothImageWrapper, BoothLogoImage, BoothLogoWrapper, BoothMenuImage, CommentContent, CommentContentInput, CommentId, CommentInfWrapper, CommentInput, CommentInputWrapper, CommentPassword, CommentWrapper, DetailHeart, DetailHeartCnt, DetailHeartWrapper, DetailRibbon, DetailShareIcon, ShareIcon } from './style';
import { BoothCardDetailHeartWrapper, CardDetailHeartCntWrapper, CardDetailHeartIcon, Ribbon } from '../search_style';
import Booth from '..';
import { faHeart, faShareNodes  } from "@fortawesome/free-solid-svg-icons";
import { faHeart as emptyHeart,faClock } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

import { RankBoothDetailLocation } from '../style';




const BoothDetailPage = () => {

    const [booth, setBooth] = useState(
        {
            id: 1,
            name: "으아아앙악..",
            type: "주간부스",
            operator: "멋쟁이사자처럼",
            logo_image: [],
            like_cnt: 18,
            start_at: "2023-05-23",
            end_at: "2023-05-23",
            location: "원흥관 9번",
            section: "1",
            description: "나는 ㅋㅋ너",
            menu: {
                "메뉴1":2000,
                "메뉴2":3000,
                "메뉴3":4000,
                },
            menu_image: ["https://url.kr/c8j4ag","https://url.kr/c8j4ag","https://url.kr/c8j4ag"],
            is_liked: false
        }
    );
    const [comment, setComment] = useState([
        {
            id: 1,
            writer: "chan",
            content: "zzzz",
            created_at: "2023-05-23",
            replies: [
                {
                    id: 1,
                    writer: "adss",
                    content: "대박",
                    created_at:"zzzzzz"
                },
            ]
        },
    ]
    );
    

  const router = useRouter();
  const { id } = router.query;

//   링크복사
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('지금 있는 페이지의 링크가 복사되었습니다.');
  };



  return (
    <BoothDetailCotainer>
        <BoothLogoWrapper>
            <DetailRibbon type={booth.type}>{booth.type}</DetailRibbon>
            <BoothLogoImage src={DeafultImage}/>
        </BoothLogoWrapper>
        <BoothDetailHeader>
            <BoothDetailHeaderWrapper>
                <BoothDetailOperator>
                    {booth.operator}
                </BoothDetailOperator>
                <BoothDetailTitle>
                    {booth.name}
                </BoothDetailTitle>
            </BoothDetailHeaderWrapper>
            <BoothDetailLoveShareWrapper>
                <DetailHeartWrapper>
                    <DetailHeart icon={booth.is_liked ? faHeart : emptyHeart} size='lg'/>
                    <DetailHeartCnt>{booth.like_cnt}</DetailHeartCnt>
                </DetailHeartWrapper>
                
                <ShareIcon icon={faShareNodes} size='lg' onClick={handleCopyLink}/>
            </BoothDetailLoveShareWrapper>

        </BoothDetailHeader>
        <BoothDetailContent>
            {booth.description}
        </BoothDetailContent>
        <BoothDetailLocation>
        <FontAwesomeIcon icon={faLocationDot} style={{marginRight:"10px"}}/>
            {booth.location}
        </BoothDetailLocation>
        <BoothDetailTime>
        <FontAwesomeIcon icon={faClock} style={{marginRight:"10px"}}/>
            {booth.start_at} ~ {booth.end_at}
        </BoothDetailTime>
        <BoothDetailSeparator />
        <BoothDetailMenuWrapper>
            <BoothDetailMenuHeader>
                <BoothDetailMenuTitle>
                    메뉴
                </BoothDetailMenuTitle>
                {/* <BoothDetailMenuAllSee>
                    전체메뉴 보기
                </BoothDetailMenuAllSee> */}
            </BoothDetailMenuHeader>


            

            <BoothImageWrapper>
             <BoothMenuImage src={DeafultImage}/>
            </BoothImageWrapper>
        </BoothDetailMenuWrapper>
        <CommentWrapper>
            <BoothDetailSeparator />
                <BoothDetailMenuTitle>
                    댓글 {comment.length}
            </BoothDetailMenuTitle>
            <CommentInputWrapper>
                <CommentInfWrapper>
                    <CommentId>
                        작성자 명
                        <CommentInput placeholder='닉네임'/>
                    </CommentId>
                    <CommentPassword>
                        비밀번호
                        <CommentInput placeholder='숫자 4자리'/>
                    </CommentPassword>
                </CommentInfWrapper>
                <CommentContent>
                    <CommentContentInput placeholder='숫자 4자리'/>
                </CommentContent>
            </CommentInputWrapper>
        </CommentWrapper>


    </BoothDetailCotainer>
  );
};

export default BoothDetailPage;
