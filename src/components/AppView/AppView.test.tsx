import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { AppView } from "./AppView";
import { ALBUMS } from "../../testIds";
import { AlbumsListProvider } from "../../context/albumsList.context";
import { NotificationProvider } from "../../context/notification.context";

// matchMedia mock
window.matchMedia = (query) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(), // Deprecated
  removeListener: jest.fn(), // Deprecated
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
});

const albumTitle = "Example title";

describe("Albums", () => {
  describe("Adding albums", () => {
    it("should open adding new album form", () => {
      // given
      render(
        <AlbumsListProvider>
          <AppView />
        </AlbumsListProvider>
      );
      const addNewAlbumButton = screen.getByTestId(ALBUMS.ADD_NEW_ALBUM_BUTTON);
      // when
      fireEvent.click(addNewAlbumButton);
      //  then
      const newAlbummForm = screen.getByTestId(ALBUMS.CREATE_NEW_ALBUM_FORM);
      expect(newAlbummForm).toBeInTheDocument();
    });
    it("should create new album and display it on the screen", () => {
      // given
      render(
        <AlbumsListProvider>
          <AppView />
        </AlbumsListProvider>
      );
      fireEvent.click(screen.getByTestId(ALBUMS.ADD_NEW_ALBUM_BUTTON));
      const titleInput = screen.getByTestId(ALBUMS.ALBUM_TITLE_INPUT);
      // when
      fireEvent.change(titleInput, { target: { value: albumTitle } });
      // then
      const createAlbumButton = screen.getByTestId(ALBUMS.CREATE_ALBUM);
      fireEvent.click(createAlbumButton);

      expect(screen.getByText(albumTitle)).toBeInTheDocument();
    });
  });
  describe("Notifications", () => {
    it("should display error notification", async () => {
      // given
      render(
        <AlbumsListProvider>
          <NotificationProvider>
            <AppView />
          </NotificationProvider>
        </AlbumsListProvider>
      );
      fireEvent.click(screen.getByTestId(ALBUMS.ADD_NEW_ALBUM_BUTTON));
      //  when
      fireEvent.change(screen.getByTestId(ALBUMS.ALBUM_TITLE_INPUT), {
        target: { value: "" },
      });
      fireEvent.click(screen.getByTestId(ALBUMS.CREATE_ALBUM));
      // then
      await waitFor(() => {
        const errorNotification = screen.getByTestId(ALBUMS.NOTIFICATION_ERROR);
        expect(errorNotification).toBeInTheDocument();
      });
    });
    it("should display success notification", async () => {
      // given
      render(
        <AlbumsListProvider>
          <NotificationProvider>
            <AppView />
          </NotificationProvider>
        </AlbumsListProvider>
      );
      fireEvent.click(screen.getByTestId(ALBUMS.ADD_NEW_ALBUM_BUTTON));
      //  when
      fireEvent.change(screen.getByTestId(ALBUMS.ALBUM_TITLE_INPUT), {
        target: { value: albumTitle },
      });
      fireEvent.click(screen.getByTestId(ALBUMS.CREATE_ALBUM));
      // then
      await waitFor(() => {
        const errorNotification = screen.getByTestId(
          ALBUMS.NOTIFICATION_SUCCESS
        );
        expect(errorNotification).toBeInTheDocument();
      });
    });
  });
});
