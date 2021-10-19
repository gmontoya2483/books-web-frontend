export interface StatisticsRootResponse {
  ok: boolean;
  booksStatistics?: BooksStatistics;
  communityStatistics?: CommunityStatistics;
  followStatistics?: FollowStatistics;
  myCopiesStatistics?: MyCopiesStatistics;
}

export interface BooksStatistics {
  totalBooks: number;
  authors: BooksStatisticsAuthors;
  genres: BooksStatisticsGenres;
}

export interface BooksStatisticsAuthors {
  total: number;
  booksByAuthor: BooksBy[];
}

export interface BooksBy {
  _id: string;
  totalBooks: number;
}

export interface BooksStatisticsGenres {
  total: number;
  booksByGenre: BooksBy[];
}

export interface CommunityStatistics {
  communityName: string;
  totalMembers: number;
  copies: CommunityStatisticsCopies;
}

export interface CommunityStatisticsCopies {
  totalCopies: number;
  authors: CopiesAuthors;
  genres: CopiesGenres;
}

export interface CopiesAuthors {
  total: number;
  copiesByAuthor: CopiesBy[];
}

export interface CopiesBy {
  _id: null | string;
  totalCopies: number;
}

export interface CopiesGenres {
  total: number;
  copiesByGenre: CopiesBy[];
}

export interface FollowStatistics {
  followers: Followers;
  following: Following;
}

export interface Followers {
  totalFollowers: number;
  totalFollowersRequest: number;
}

export interface Following {
  totalFollowing: number;
  totalFollowingRequest: number;
}

export interface MyCopiesStatistics {
  totalCopies: TotalCopies;
  copies: MyCopiesStatisticsCopies;
}

export interface MyCopiesStatisticsCopies {
  genres: CopiesGenres;
  authors: CopiesAuthors;
  currentLoans: CurrentLoans;
}

export interface CurrentLoans {
  total: number;
  copiesByCurrentLoanStatus: CopiesBy[];
}

export interface TotalCopies {
  total: number;
  deletedCopies: number;
  activeCopies: number;
}
