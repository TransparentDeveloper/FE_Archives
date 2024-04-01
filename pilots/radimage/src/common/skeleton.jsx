import styled from 'styled-components'
import { COLORS } from '../consts/design-token'

const Skeleton = () => {
  return (
    <S.SkeletonContainer>
      <S.ShimmerContainer>
        <S.Shimmer />
      </S.ShimmerContainer>
    </S.SkeletonContainer>
  )
}
export default Skeleton

const SkeletonContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${COLORS.GSCALE[400]};
  position: relative;
`

const ShimmerContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  animation: loading 2.5s infinite;
  @keyframes loading {
    0% {
      transform: translateX(-150%);
    }
    50% {
      transform: translateX(-60%);
    }
    100% {
      transform: translate(150%);
    }
  }
`

const Shimmer = styled.div`
  width: 70%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.4) 25%,
    rgba(255, 255, 255, 0.6) 50%,
    rgba(255, 255, 255, 0.4) 75%,
    rgba(255, 255, 255, 0) 100%
  );
  box-shadow: 0 0 30px 30px rgba(255, 255, 255, 0.05);
`
const S = {
  SkeletonContainer,
  ShimmerContainer,
  Shimmer,
}
