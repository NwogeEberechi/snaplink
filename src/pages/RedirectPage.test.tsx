// RedirectPage.test.tsx
import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { RedirectPage } from './RedirectPage';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks';
import { incrementClicks } from '../components';

// Mock the hooks and functions
vi.mock('react-router-dom', () => ({
  useNavigate: vi.fn(),
  useParams: vi.fn(),
}));

vi.mock('../hooks', () => ({
  useAppDispatch: () => vi.fn(),
  useAppSelector: vi.fn(),
}));

vi.mock('../components', () => ({
  incrementClicks: vi.fn(),
}));

describe('RedirectPage', () => {
  it('should redirect to the correct URL and increment clicks when urlCode is found', async () => {
    const mockNavigate = vi.fn();
    const mockDispatch = vi.fn();
    const mockUseParams = { urlCode: 'test-code' };
    const mockUseAppSelector = { links: [{ urlCode: 'test-code', longUrl: 'https://example.com' }] };

    // Set up mocks
    (useNavigate as unknown as vi.Mock).mockReturnValue(mockNavigate);
    (useParams as unknown as vi.Mock).mockReturnValue(mockUseParams);
    (useAppDispatch as unknown as vi.Mock).mockReturnValue(mockDispatch);
    (useAppSelector as unknown as vi.Mock).mockReturnValue(mockUseAppSelector);

    render(<RedirectPage />);

    // Wait for the redirection effect to take place
    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith(incrementClicks('test-code'));
      expect(window.location.href).toBe('https://example.com/');
    });
  });

  it('should navigate to the home page when urlCode is not found', async () => {
    const mockNavigate = vi.fn();
    const mockUseParams = { urlCode: 'invalid-code' };
    const mockUseAppSelector = { links: [] };

    // Set up mocks
    (useNavigate as unknown as vi.Mock).mockReturnValue(mockNavigate);
    (useParams as unknown as vi.Mock).mockReturnValue(mockUseParams);
    (useAppDispatch as unknown as vi.Mock).mockReturnValue(vi.fn());
    (useAppSelector as unknown as vi.Mock).mockReturnValue(mockUseAppSelector);

    render(<RedirectPage />);

    // Wait for the navigation effect to take place
    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/');
    });
  });

  it('should not increment clicks or redirect if urlCode is not provided', async () => {
    const mockNavigate = vi.fn();
    const mockUseParams = { urlCode: undefined };
    const mockUseAppSelector = { links: [] };

    // Set up mocks
    (useNavigate as unknown as vi.Mock).mockReturnValue(mockNavigate);
    (useParams as unknown as vi.Mock).mockReturnValue(mockUseParams);
    (useAppDispatch as unknown as vi.Mock).mockReturnValue(vi.fn());
    (useAppSelector as unknown as vi.Mock).mockReturnValue(mockUseAppSelector);

    render(<RedirectPage />);

    // Ensure no redirection or incrementing clicks
    await waitFor(() => {
      expect(mockNavigate).not.toHaveBeenCalled();
      expect(window.location.href).toBe('http://localhost/');
    });
  });
});
