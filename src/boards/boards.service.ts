import { Injectable } from '@nestjs/common';
import { Board, BoardStats } from './board.model.ts';
import { v4 as uuidv4 } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto.js';

@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }

  createBoard(createBoardDto: CreateBoardDto): Board {
    const { title, description } = createBoardDto;

    const board: Board = {
      id: uuidv4(),
      title,
      description,
      status: BoardStats.PUBLIC,
    };

    this.boards.push(board);
    return board;
  }

  getBoardById(id: string): Board {
    return this.boards.find((board) => board.id === id);
  }

  deleteBoard(id: string): void {
    this.boards = this.boards.filter((board) => board.id !== id);
  }

  updateBoardStatus(id: string, status: BoardStats) {
    const board = this.getBoardById(id);
    board.status = status;

    return board;
  }
}
