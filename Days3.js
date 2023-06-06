import { useState, useEffect, useRef } from 'react';
import {
  DayWrap,
  SelectedDay,
  WeekWrap,
  DayNumberWrap,
  SlideContainer,
  SlideItem,
  BoardsWrap,
} from '../style/HomeStyle';
import Board from './Board';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBoards, selectFilteredBoards } from '../store/boardSlice';

const Days = () => {
  const now = new Date();
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const dispatch = useDispatch();
  const [currentDate, setCurrentDate] = useState(now);

  const elRef = useRef();

  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = (e) => {
        e.preventDefault();
        const nextDate = new Date(currentDate);
        if (e.deltaY === 0) return;
        else if (e.deltaY > 0) {
          nextDate.setDate(currentDate.getDate() + 7);
          if (nextDate.getMonth() !== currentDate.getMonth()) {
            nextDate.setDate(1);
            nextDate.setMonth(currentDate.getMonth() + 1);
          }
          setCurrentDate(nextDate);
        } else if (e.deltaY < 0) {
          const preDate = new Date(currentDate);
          preDate.setDate(currentDate.getDate() - 7);
          setCurrentDate(preDate);
        }
        el.scrollTo({
          behavior: 'smooth',
        });
      };
      el.addEventListener('wheel', onWheel);
      return () => el.removeEventListener('wheel', onWheel);
    }
  }, [currentDate]);

  const selectedDateIndex = currentDate.getDay();

  useEffect(() => {
    dispatch(fetchBoards());
  }, [dispatch]);

  const filteredBoards = useSelector(selectFilteredBoards).filter((board) => {
    const boardDate = new Date(board.mealTime).getDay();
    return boardDate === selectedDateIndex;
  });

  return (
    <>
      <DayWrap ref={elRef}>
        <SlideContainer>
          {daysOfWeek.map((days, idx) => {
            const dayNumber =
              currentDate.getDate() - (selectedDateIndex - idx) + 1;
            const isSelected = idx === selectedDateIndex;
            return (
              <SlideItem key={idx}>
                <SelectedDay
                  id={idx}
                  el={days}
                  selected={isSelected}
                  onClick={() => {
                    const newDate = new Date(currentDate);
                    newDate.setDate(
                      currentDate.getDate() - (selectedDateIndex - idx)
                    );
                    setCurrentDate(newDate);
                  }}
                >
                  <WeekWrap>{days}</WeekWrap>
                  <DayNumberWrap selected={isSelected}>
                    {dayNumber}
                  </DayNumberWrap>
                </SelectedDay>
              </SlideItem>
            );
          })}
        </SlideContainer>
      </DayWrap>
      <div className="boards">
        <BoardsWrap>
          {filteredBoards.map((board, idx) => (
            <Board key={idx} board={board} />
          ))}
        </BoardsWrap>
      </div>
    </>
  );
};

export default Days;
